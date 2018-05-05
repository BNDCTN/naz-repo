import { A } from './lib/A';
import { B } from './lib/B';
import { CustomMath } from './lib/CustomMath'

class Project{
    main(){
        let a = new A();
        let b = new B();

        console.log(a.prop, '\n', b.prop);
    }
}

new Project().main();