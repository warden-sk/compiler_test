import React from 'react';
import './Client.css';
import decodeThings from './helpers/decodeThings';
import encodeThings from './helpers/encodeThings';
import Input from './Input';

export interface Thing {
  isDone: boolean;
  key: string;
}

function Client() {
  const [things, updateThings] = React.useState<Thing[]>([]);

  const [draggingIndex, setDraggingIndex] = React.useState<number>();
  const [draggingThing, setDraggingThing] = React.useState<HTMLDivElement>();

  React.useEffect(() => {
    const things = localStorage.getItem('things');

    if (things) {
      updateThings(decodeThings(things));
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem('things', encodeThings(things));
  }, [encodeThings(things)]);

  /* ———————————————————————————————————————————————————————————————————————————————————————————————————————————————— */

  function onDelete(i: number) {
    return (e: React.MouseEvent<HTMLDivElement>) => {
      updateThings(things => {
        return things.filter((thing, j) => {
          return j !== i;
        });
      });
    };
  }

  function onDone(i: number) {
    return (e: React.MouseEvent<HTMLDivElement>) => {
      updateThings(things => {
        return things.map((thing, j) => {
          if (j === i) {
            return { ...thing, isDone: !thing.isDone };
          } else {
            return thing;
          }
        });
      });
    };
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      const key: string = e.currentTarget.value;

      updateThings(things => {
        const newThing = { isDone: false, key };

        return [...things, newThing];
      });

      e.currentTarget.value = '';
    }
  }

  function onUpdate(i: number) {
    return (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        const key: string = e.currentTarget.value;

        updateThings(things => {
          return things.map((thing, j) => {
            if (j === i) {
              return { ...thing, key };
            } else {
              return thing;
            }
          });
        });
      }
    };
  }

  /* ———————————————————————————————————————————————————————————————————————————————————————————————————————————————— */

  function onDragEnd(i: number) {
    return (e: React.DragEvent<HTMLDivElement>) => {
      setDraggingIndex(undefined);
      setDraggingThing(undefined);
    };
  }

  function onDragOver(i: number) {
    return (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();

      const draggedOverItem = e.currentTarget;

      if (draggingThing !== draggedOverItem) {
        const newThings = [...things];

        newThings.splice(draggingIndex!, 1);
        newThings.splice(i, 0, things[draggingIndex!]);

        setDraggingIndex(i);

        updateThings(newThings);
      }
    };
  }

  function onDragStart(i: number) {
    return (e: React.DragEvent<HTMLDivElement>) => {
      setDraggingIndex(i);
      setDraggingThing(e.currentTarget);

      e.dataTransfer.effectAllowed = 'move';
    };
  }

  return (
    <div className="container" mX="auto">
      <div p="4" spaceY="4">
        <Input onKeyDown={onKeyDown} />
        <div spaceY="2">
          {things.map(({ isDone, key }, i) => (
            <div
              alignItems="center"
              className={{ done: isDone }}
              display="flex"
              draggable
              key={key}
              onDragEnd={onDragEnd(i)}
              onDragOver={onDragOver(i)}
              onDragStart={onDragStart(i)}
              spaceX="4"
            >
              <div
                border="2"
                borderRadius="2"
                cursor="pointer"
                fontWeight={isDone && '600'}
                lineHeight="1"
                onClick={onDone(i)}
                opacity={isDone ? '100' : '50'}
                p="2"
              >
                {'\u2713'}
              </div>
              <div fontWeight={isDone && '600'} width="100">
                <input border="0" defaultValue={key} onKeyDown={onUpdate(i)} type="text" width="100" />
              </div>
              <div fontWeight="600" lineHeight="1" onClick={onDelete(i)} p="2">
                {'\u2717'}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Client;
