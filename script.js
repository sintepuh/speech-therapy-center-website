


$('.back-to-top').click(function () {
    $('body,html').animate({scrollTop: 0}, 800);
});
function set_bg(element) {
    if (element) {
        if(element.value == 1){
            element.style.background = 'linear-gradient(90deg, #D1E6A5 0% , #E6E6E6 0%)';
        }else if(element.value>=2 && element.value<7){
            if(element.value<4){
                element.style.background = 'linear-gradient(90deg, #D1E6A5 '+ ((((element.value / element.max ) * 100)-10))
                    +'% , #E6E6E6 '+((((element.value / element.max ) * 100)-10)) +'%)';
            }else{
                element.style.background = 'linear-gradient(90deg, #D1E6A5 '+ ((((element.value / element.max ) * 100)-5))
                    +'% , #E6E6E6 '+((((element.value / element.max ) * 100)-5)) +'%)';
            }
        }else{
            element.style.background = 'linear-gradient(90deg, #D1E6A5 '+ ((element.value / element.max ) * 100)
                +'% , #E6E6E6 '+((element.value / element.max ) * 100) +'%)';
        }
    }
}

document.querySelectorAll('.slider').forEach(slider =>{
    slider.addEventListener("input", function() {
        set_bg(slider);
    });
});



class TruncateLines extends HTMLElement {
  constructor() {
    super();
    const template = document.getElementById("truncate-lines-template");
    const templateContent = template.content;

    this.attachShadow({ mode: 'open' }).appendChild(templateContent.cloneNode(true));
  }
  
  connectedCallback() {
    this.lineClamp = this.getAttribute('line-clamp');
    this.container = this.shadowRoot.querySelector('.truncate-lines');
    this.clampEl = this.shadowRoot.querySelector('.truncate-lines__clamp');
    this.container.style.setProperty("--truncate-line-clamp", this.lineClamp);
    this.clampRect = this.clampEl.getBoundingClientRect();
    this.overflowEl = this.shadowRoot.querySelector('.truncate-lines__overflow');
    this.overflowRect = this.overflowEl.getBoundingClientRect();
    
    this.setClosedHeight();
    
    this.toggleButton = this.shadowRoot.querySelector('.truncate-lines__expand');
    this.toggleButton.addEventListener('click', () => this.handleClick());
  }
  
  setClosedHeight() {
    // if(!=0){
    //   this.container.style.setProperty("--truncate-height", `${this.clampRect.height}px`);
    //   
    // }
    this.container.style.setProperty("--truncate-height", `${this.clampRect.height}px`);
  }
  
  setOpenedHeight() {
   
      this.container.style.setProperty("--truncate-height-expanded", `${this.overflowRect.height}px`);
   
  }
  
  handleClick() {
    if (this.container.classList.contains('truncate-lines--expanded')) {
      this.close();
    } else {
      this.open();
    }
  }
  
  open() {
    this.container.classList.remove('truncate-lines--line-clamped');
    window.requestAnimationFrame(() => {
      this.overflowRect = this.overflowEl.getBoundingClientRect();
      this.setOpenedHeight();
      this.container.classList.add('truncate-lines--expanded');
    });
  }
  
  close() {
    this.container.classList.remove('truncate-lines--expanded');
    setTimeout(() => {
      this.container.classList.add('truncate-lines--line-clamped');
    }, 300);
  }
}

customElements.define("truncate-lines", TruncateLines);



function mount(){
  document.querySelectorAll('.slider').forEach(slider =>{
      set_bg(slider);

  });
}
mount();

const menu = document.querySelector('.nav')
const menubtn = document.querySelector('.menu-icon')
const body = document.body;

if (menu && menubtn) {
  menubtn.addEventListener('click', () => {
      menu.classList.toggle('active');
      menubtn.classList.toggle('active');
      body.classList.toggle('lock');
  })

  menu.querySelectorAll('.menu-link').forEach(link => {
      link.addEventListener('click', () => {
          menu.classList.remove('active');
          menubtn.classList.remove('active');
          body.classList.remove('lock');
      })
  })
}

const infoblock = document.querySelector('.info-block')
const btnConteiner = document.querySelector('.btn-container')
const navButtons = btnConteiner.querySelectorAll('.nav-btn');
const infoDivs = infoblock.querySelectorAll('div');

navButtons.forEach(btn => {
  btn.addEventListener('click', () => {
      navButtons.forEach(btn => btn.disabled = false);
      infoDivs.forEach(div => {
          if (div.className.includes('section')) {
              div.classList.add('hidden');
          }
          btn.className.split(' ').forEach(name => {
              if (div.className.includes('section') && div.className.includes(name)) {
                  div.classList.toggle('hidden');
              }
          });
      });
      btn.disabled = true;
  });
});


$(document).ready(function(){
  $("div.сlinical-ped").addClass("hidden");
  $("div.psychologist-ped").addClass("hidden");
});