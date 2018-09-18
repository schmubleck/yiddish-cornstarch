/* tslint:disable:max-classes-per-file */
// TODO(zhyty): reenable max-classes-per-file once we're past playing around.
import * as React from 'react';
import './App.css';

// TODO(zhyty): this is just a stub. Will be need to be updated when Lessons are implemented.
interface ILessonProps {
  exercises: string[];
  title: string;
}

function LessonFrame(props: ILessonProps) {
  return (
    <div className="lesson-frame">
      <h1 className="lesson-frame-title">
        Lesson: {props.title}
      </h1>
      <LessonInteractiveArea {...props} />
    </div>
  );
}

function LessonInteractiveArea(props: ILessonProps) {
  const exercisesListItems = [];
  for (const exercise of props.exercises) {
    exercisesListItems.push(
      <li>{exercise}</li>
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
    'Find the meaning of Schmubleck.',
    'Highlight the bad code in this sample.',
  ],
  title: 'What is Yiddish Cornstarch?',
};

export default App;
