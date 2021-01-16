class Slider {
    constructor(obj) {
        this.slider = document.querySelector(obj.slider)
        this.pages = this.slider.querySelector('.carousel_pages').children
        this.indicators = this.slider.querySelector('.indicators_list').children
        this.prevBtn = this.slider.querySelector('.prev_btn')
        this.nextBtn = this.slider.querySelector('.next_btn')
        this.activePage = 0;
        this.pageHeight = this.slider.clientHeight;
        this.flag = true;
        for (let i = 0; i < this.pages.length; i++) {
            this.pages[i].style.transform = `translateY(${this.pageHeight}px)`;
        }
        this.pages[this.activePage].style.transform = `translateY(0)`
        this.prevBtn.addEventListener('click', () => {
            this.move(this.prevBtn)
        })
        this.nextBtn.addEventListener('click', () => {
            this.move(this.nextBtn)
        })

        for (let i = 0; i < this.indicators.length; i++) {
            this.indicators[i].addEventListener('click', () => {
                if (i > this.activePage) {
                    var interval = setInterval(() => {
                        this.move(this.nextBtn)
                        if (i == this.activePage) {
                            clearInterval(interval);
                        }
                    }, 1000);
                } else if (i < this.activePage) {
                    var interval = setInterval(() => {
                        this.move(this.prevBtn)
                        if (i == this.activePage) {
                            clearInterval(interval);
                        }
                    }, 1000);
                }
            })

        }

    }

    move(btn) {
        if (btn == this.prevBtn && this.activePage > 0) {
            this.pages[this.activePage].style.transition = `1s`;
            this.pages[this.activePage].classList.remove('active');
            this.activePage--;
            for (let i = 0; i < this.pages.length; i++) {
                if (i > this.activePage) {
                    this.pages[i].style.transform = `translateY(${this.pageHeight}px)`;
                }
            }
            this.pages[this.activePage].style.transition = `1s`;
            this.pages[this.activePage].style.transform = `translateY(0)`;
            this.pages[this.activePage].classList.add('active');
            this.prevBtn.disabled = true;
            this.checkIndicator();
            setTimeout(() => {
                this.prevBtn.disabled = false;
            }, 1000);
        } else if (btn == this.nextBtn && this.activePage < this.pages.length - 1) {
            this.pages[this.activePage].classList.remove('active');
            this.pages[this.activePage].style.transition = `1s`;
            this.activePage++;
            for (let i = 0; i < this.pages.length; i++) {
                if (i < this.activePage) {
                    this.pages[i].style.transform = `translateY(${-this.pageHeight}px)`;
                }
            }
            this.pages[this.activePage].style.transition = `1s`;
            this.pages[this.activePage].style.transform = `translateY(0)`;
            this.pages[this.activePage].classList.add('active');
            this.nextBtn.disabled = true;
            this.checkIndicator();
            setTimeout(() => {
                this.nextBtn.disabled = false;
            }, 1000);
        }

    }

    checkIndicator() {
        for (let i = 0; i < this.indicators.length; i++) {
            this.indicators[i].classList.remove('active');
        }
        this.indicators[this.activePage].classList.add('active');
    }

}

const slider1 = new Slider({
    slider: '.carousel',

})

// window.addEventListener('resize',()=>{
//     location.reload()
// })