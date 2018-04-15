import { A } from './lib/A';
import { B } from './lib/B';
import { Sort } from './lib/Sort';

class Project{
    main(){
        let a = new A();
        let b = new B();

        console.log(a.prop, '\n', b.prop);

        console.log(Sort.quick<number>([2,3,4,6,9,0,7,6,5,4,3,34,54,7,8]));
    }
}

new Project().main();