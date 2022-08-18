class Shape {
    area() {

    }
}

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    setWidth = (width) => {
        this.width = width;
    }

    setHeight = (height) => {
        this.height = height;
    }

    area = () => {
        return this.width * this.height;
    }
}


class Square extends Shape {
    setWidth(width) {
        this.width = width;
        this.height = width;
    }

    setHeight(height) {
        this.width = height;
        this.height = height;
    }
}

const increaseShapeWidth = (shape) => {
    shape.setWidth(shape.width + 1);
}

const rectangle1 = new Rectangle(10, 2);
const square1 = new Square(5, 5);

increaseShapeWidth(rectangle1);
increaseShapeWidth(square1);
console.log(rectangle1.area());
console.log(square1.area());