/* tslint:disable:max-classes-per-file */
// TODO(zhyty): reenable max-classes-per-file once we're past playing around.
import * as React from 'react';

import * as Snippet from './Snippet';

// TODO(zhyty): these are just stubs. Will be need to be updated when Lessons
// are implemented.
interface IExercise {
  title: string;
  // we'll need to fill this out.
  content: Snippet.ISnippetProps;
}

interface ILesson {
  title: string;
  exercises: IExercise[];
  // we'll need to fill this out too.
}

function LessonFrame(lesson: ILesson) {
  return (
    <div className="lesson-frame">
      <h1 className="lesson-frame-title">
        Lesson: {lesson.title}
      </h1>
      <LessonInteractiveArea {...lesson} />
    </div>
  );
}

function LessonInteractiveArea(lesson: ILesson) {
  const exercisesListItems = [];
  for (const exercise of lesson.exercises) {
    exercisesListItems.push(
      <Snippet.Snippet key={exercise.title} {...exercise.content} />
    );
  }

  return (
    <div className="lesson-interactive">
      Exercises:
      <ul>{exercisesListItems}</ul>
    </div>
  );
}

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Yiddish Cornstarch</h1>
        </header>
        <LessonFrame {...SAMPLE_LESSON} />
      </div>
    );
  }
}

const SAMPLE_LESSON = {
  exercises: [
    {
      title: 'Find the meaning of Schmubleck.',
      content: {
        blocks: [
          {code: 'def main():\n', good: false},
          {code: '    print("hello")\n    print("world")\n', good: true},
        ],
        lang: 'python',
      },
    },
    {
      title: 'Highlight the bad code in this sample.',
      content: {
        blocks: [
          {code: 'int main() {\n', good: true},
          {code: '    std::cout << "hi\\n";\n', good: false},
          {code: '}', good: true},
        ],
        lang: 'clike',
      },
    },
  ],
  title: 'What is Yiddish Cornstarch?',
};

export default App;
