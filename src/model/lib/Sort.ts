export class Sort{

    static quick<T>(array: T[]): T[]{
        let l = [];
        let r = [];
        let len = array.length;
        if (len <= 1 || array[0] === array[len-1]) return array;
        let nom = array[len-1];
        for (let i = 0; i < len-1; i++) {
            if (array[i] < nom) l.push(array[i]);
            else r.push(array[i])
        }
        r.unshift(nom);
        return Sort.quick(l).concat(Sort.quick(r));
    }

}