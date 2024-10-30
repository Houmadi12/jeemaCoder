import FormAdd from './FormAdd';
import Tableau from './Tableau';

function Container() {

  return (
    <div className="w-full justify-center h-screen pt-11">
        <h1 className="text-center font-medium">Jeemacoder gestion utilisateurs</h1>
        {/* Formulaire */}
        <div className="flex w-7/10 justify-center pt-3">
          <FormAdd />
        </div>
        <div className='w-full px-32 pt-11'>
            <Tableau />
        </div>
    </div>
  )
}

export default Container;
