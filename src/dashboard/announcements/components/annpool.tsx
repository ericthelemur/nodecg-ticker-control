import './announcement.scss';

import { Draggable, DraggableProvided, Droppable } from 'react-beautiful-dnd';
import { AnnPool, AnnRef, Announcement } from 'types/schemas';

import { CSSTransition, TransitionGroup } from 'react-transition-group';
import add from '../../assets/add.svg';
import Editable from "./editable";
import { AnnouncementComp, AnnouncementError, InsertHandle } from './announcement';
import { sendTo, sendToF } from "common/listeners";

export interface AnnPoolProps {
    id: string;
    pool: AnnPool;
    contents: Announcement[];
    prelude?: Announcement[];
    preludeRefs?: AnnRef[];
}

function PoolTitle(props: AnnPoolProps) {
    const { pool } = props;
    return (<h3 className="m-1 d-flex gap-2">
        <Editable text={pool.name} className="flex-grow-1"
            setText={(v) => pool.name = v} />
        <Editable type="number" className='priority'
            text={pool.priority.toString()} setText={v => pool.priority = Number(v)} />
    </h3>)
}


function DnDTransitionItem(id: string, index: number, content: (provided: DraggableProvided) => JSX.Element) {
    return <CSSTransition timeout={500} key={id} classNames="item">
        <Draggable key={id} draggableId={id} index={index}>
            {content}
        </Draggable>
    </CSSTransition>
}

interface DndTransitionsListProps<T> {
    id: string;
    data: T[];
    ids: string[];
    content: (id: string, index: number, item: T, provided: DraggableProvided) => JSX.Element;
}

export function DnDTransitionsList<T>({ id, ids, data, content }: DndTransitionsListProps<T>) {
    return (
        <Droppable droppableId={id}>
            {(provided) => (
                <div {...provided.droppableProps} ref={provided.innerRef}>
                    <TransitionGroup className='pool vstack'>
                        {data.map((d, i) => DnDTransitionItem(ids[i], i, (p) => content(ids[i], i, d, p)))}
                        {provided.placeholder}
                    </TransitionGroup>
                </div>
            )}
        </Droppable>
    )
}

function makeID(queue: boolean) {
    return (r: AnnRef) => `${queue ? "queue-" : ""}${r.id}${r.time ? `-${r.time}` : ""}`
}
export function AnnPoolComp(props: AnnPoolProps) {
    const { id: pid, pool } = props;
    const queue = pid === "queue";
    const prelude = props.prelude || [];
    const n = pool.announcements.length;
    const refs = [...(props.preludeRefs || []), ...pool.announcements].slice(0, n);
    const data = [...prelude, ...props.contents].slice(0, n);
    if (queue && props.prelude) console.log(props.prelude.length, refs.map(makeID(queue)));
    return (
        <div className={"card my-1" + (pool.priority === 0 && !queue ? " opacity-50" : "")}>
            <div className="card-body">
                {!queue && <PoolTitle {...props} />}
                <DnDTransitionsList id={pid}
                    ids={refs.map(makeID(queue))}
                    data={data}
                    content={(id, index, ann, provided) => {
                        const ref = pool.announcements[index];
                        return <AnnouncementComp id={ref} pid={pid} announcement={ann} provided={provided} queue={queue} strike={index < prelude.length} />
                    }} />
                <div className="position-relative">
                    <InsertHandle pid={pid} before={null} />
                </div>
            </div>
        </div>
    )
}