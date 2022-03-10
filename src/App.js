import {Card} from "./components/Card";
import {data} from "./Data";

export const App = () =>
    <div className={'testimonials'}>
      {data.map((person,idx) => <Card key={idx} person={person}/>)}
    </div>
