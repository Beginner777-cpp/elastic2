class Slider {
    constructor(obj) {
        this.slider = document.querySelector(obj.slider)
        this.pages = this.slider.querySelector('.carousel_pages').children
        this.indicators = this.slider.querySelectorAll('.indicator')
        this.prevBtn = this.slider.querySelector('.prev_btn')
        this.nextBtn = this.slider.querySelector('.next_btn')
        this.activePage = 0;
        this.pageHeight = this.slider.clientHeight;
        this.flag = true;
        for (let i = 0; i < this.pages.length; i++) {
            this.pages[i].style.transform = `translateY(${this.pageHeight}px)`;
        }
        this.pages[this.activePage].style.transform = `translateY(0)`
        /*======================================================= prevNextBtns ===============================================*/
        this.prevBtn.addEventListener('click', () => {
            if (this.flag == true) {
                this.move(this.prevBtn)
                this.disableBtns(true)
                setTimeout(() => {
                    this.disableBtns(false)
                }, 1000);
            }
        })
        this.nextBtn.addEventListener('click', () => {
            if (this.flag == true) {
                this.move(this.nextBtn)
                this.disableBtns(true)
                setTimeout(() => {
                    this.disableBtns(false)
                }, 1000);
            }

        })
        /*======================================================= /prevNextBtns ===============================================*/

        /*======================================================= indicators==================================================*/

        for (let i = 0; i < this.indicators.length; i++) {
            this.indicators[i].addEventListener('click', () => {
                if (this.flag == true) {
                    if (i > this.activePage) {
                        this.flag = false;
                        var interval = setInterval(() => {
                            this.move(this.nextBtn)
                            if (i == this.activePage) {
                                clearInterval(interval);
                                this.disableIndicators(false)
                                this.flag = true;
                            }
                        }, 500);
                    } else if (i < this.activePage) {
                        this.flag = false;
                        var interval = setInterval(() => {
                            this.move(this.prevBtn)
                            if (i == this.activePage) {
                                clearInterval(interval);
                                this.disableIndicators(false)
                                this.disableBtns(true)
                                this.flag = true
                            }
                        }, 500);
                    }
                }


            })

        }
        /*======================================================= /indicators ==================================================*/


        /*======================================================= wheel =========================================================*/

        window.addEventListener('wheel', (e) => {
            if (this.flag == true) {
                if (e.deltaY > 0) {
                    this.move(this.nextBtn);
                } else if (e.deltaY < 0) {
                    this.move(this.prevBtn);
                }
                this.flag = false;
                setTimeout(() => {
                    this.flag = true;
                }, 1000);
            }
        })
        /*======================================================= /wheel =========================================================*/


        /*======================================================= keys ==========================================================*/

        window.addEventListener('keydown', (e) => {
            if (this.flag === true) {
                if (e.code == 'ArrowDown') {
                    this.move(this.nextBtn);
                } else if (e.code == 'ArrowUp') {
                    this.move(this.prevBtn);
                }
                this.flag = false;
                setTimeout(() => {
                    this.flag = true;
                }, 1000);
            }
        })
        /*======================================================= /keys ==========================================================*/

        this.touchStartY;
        /*======================================================= swipe =========================================================*/
        this.pages[this.activePage].addEventListener('touchstart', (e) => {
            this.touchStartY = e.touches[0].clientY;
            console.log(this.touchStartY);
        })
        this.pages[this.activePage].addEventListener('touchmove', (e) => {
            this.change = e.touches[0].clientY - this.touchStartY;
            console.log(this.change);
            this.pages[this.activePage].style.transform = `translateY(${this.change}px)`
            if (this.change > 0) {
                this.pages[this.activePage - 1].style.transform = `translateY(${this.pageHeight - this.change}px)`
            } else if (this.change < 0) {
                this.pages[this.activePage - 1].style.transform = `translateY(${this.pageHeight - this.change}px)`
            } else {
                console.log('no change');
            }
        })
        /*======================================================= /swipe =========================================================*/

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
            this.checkIndicator();
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
            this.checkIndicator();
        }

    }

    checkIndicator() {
        for (let i = 0; i < this.indicators.length; i++) {
            this.indicators[i].classList.remove('active');
        }
        this.indicators[this.activePage].classList.add('active');
    }
    disableBtns(checker) {
        if (checker == true) {
            this.nextBtn.disabled = true;
            this.nextBtn.disabled = true;
        } else {
            this.nextBtn.disabled = false;
            this.nextBtn.disabled = false;
        }

    }
    disableIndicators(checker) {
        if (checker == true) {
            for (let i = 0; i < this.indicators.length; i++) {
                this.indicators[i].disabled = true;
            }
        } else {
            for (let i = 0; i < this.indicators.length; i++) {
                this.indicators[i].disabled = false;
            }
        }
    }

}

const slider1 = new Slider({
    slider: '.carousel',

})

// window.addEventListener('resize',()=>{
//     location.reload()
// })