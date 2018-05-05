export class CustomMath {
    static Pow(number: number, power: number): number {
        if (power == 0) {
            return 1;
        }
        let n = number,
            p = Math.abs(power);

        for (let i = 0; i < p-1; i++) {
            n *= number;
        }
        return power < 0 ? 1/n : n;
    }
}