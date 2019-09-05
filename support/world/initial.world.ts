import { setWorldConstructor } from "cucumber";

class World {
  greeting!: string;
    constructor () {
      this.greeting;
    }
}

setWorldConstructor(World)
