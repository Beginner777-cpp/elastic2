

class Slider {
    constructor(obj) {
        this.slider = document.querySelector(obj.slider)
        this.pages = this.slider.querySelector('.carousel_pages').children
        this.indicators = this.slider.querySelector('.indicators_list').children
        this.prevBtn = this.slider.querySelector('.prev_btn')
        this.nextBtn = this.slider.querySelector('.next_btn')
        this.activePage = 0
        this.pageHeight = this.slider.clientHeight
        this.prevBtn.addEventListener('click', () => {
            this.move(this.prevBtn)
        })
        this.nextBtn.addEventListener('click', () => {
            this.move(this.nextBtn)
        })

    }

    move(btn) {
        if (btn == this.prevBtn && this.activePage > 0) {
            this.pages[this.activePage].style.transform = `translateY(${this.pageHeight}px)`;
            this.activePage--;
            this.pages[this.activePage].style.top = 0;
        }
        else if (btn == this.nextBtn && this.activePage < this.pages.length) {
            this.pages[this.activePage].style.transform = `translateY(${-this.pageHeight}px)`;

            this.activePage++;

        }
    }

}

const slider1 = new Slider({
    slider: '.carousel',

})