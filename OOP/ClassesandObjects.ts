class Singer {
  name: string;
  date: number;

  constructor(name: string, date: number) {
    this.name = name;
    this.date = date;
  }

  singSong() {
    console.log(
      `${this.name}, ${this.date} , I'm the problem it's me`
    );
  }
}

const taylor = new Singer("Taylor", 1989);
taylor.singSong();
