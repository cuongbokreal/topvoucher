// https://codepen.io/PJCHENder/pen/KaaBGP
let obj = {
  data: [
//Ghim
	  {"caption":"Tiki Rohto",
	"src":"https://salt.tikicdn.com/cache/w1080/ts/banner/ba/56/d7/d25b5a7bf06fcaefd092fa449059b20f.png.webp",
	"link":"https://shorten.asia/UsyRcX6X",
	},
	  {"caption":"Lazada Lịch khuyến mãi",
	"src":"https://lzd-img-global.slatic.net/g/icms/images/ims-web/cfb13bc5-6222-4835-b538-142f9d4245f1.jpg_1200x1200q90.jpg_.webp",
	"link":"https://shorten.asia/fHkKNGqE",
	},
	  {"caption":"Tiki Reckitt",
	"src":"https://salt.tikicdn.com/cache/w1080/ts/banner/cd/54/c6/f7b3c7d8ffbebe926f65b98a0553d181.jpg.webp",
	"link":"https://shorten.asia/JyrFYwtw",
	},
	  {"caption":"Tiki Tech Area",
	"src":"https://salt.tikicdn.com/cache/w1080/ts/banner/d5/14/ec/9a312fee59a04443ac7ca13a79d2ef57.png.webp",
	"link":"https://shorten.asia/emVJ8BUc",
	},
	  {"caption":"Tiki Samsung",
	"src":"https://salt.tikicdn.com/cache/w1080/ts/banner/b8/21/ab/488f38e42ac51e4e8709cf800e474a15.jpg.webp",
	"link":"https://shorten.asia/1jZGEbY4",
	},
//SHOPEE
  {"caption":"Sieu voucher 400k bạn mới",
	"src":"https://cf.shopee.vn/file/8da7a277ab0b311b9152070ac7e2c217_xxhdpi",
	"link":"https://shorten.asia/VHqVatw2",
	},
//LAZADA
	  {"caption":"LAZADA Sale Hè 6.6",
	"src":"https://lzd-img-global.slatic.net/g/icms/images/ims-web/659ef5f2-7cc1-416e-be07-39d1261dedbd.jpg_1200x1200q90.jpg_.webp",
	"link":"https://shorten.asia/xKTJUpws",
	 },
	  {"caption":"LAZADA Ngày Hội Thời Trang",
	"src":"https://lzd-img-global.slatic.net/g/icms/images/ims-web/6e689bc3-b364-4dea-bb8e-bb7eadc2aedf.jpg_1200x1200q90.jpg_.webp",
	"link":"https://shorten.asia/7vVKckAW",
	 },

//Tiki
	{
	"caption":"TIKI Beauty Club",
	"src":"https://i.imgur.com/yBxEKxb.png",
	"link":"https://shorten.asia/ycJaP4T7",
	},
	{
	"caption":"TIKI Săn deal điện tử",
	"src":"https://salt.tikicdn.com/cache/w1080/ts/banner/9c/ea/5d/d4fb710908d862484f14e6242dd1faf9.png.webp",
	"link":"https://shorten.asia/u2kKdER9",
	},
	{
	"caption":"TIKI Tefal",
	"src":"https://salt.tikicdn.com/cache/w1080/ts/banner/51/bd/94/67779b0148758aab7b4032ed81667d5d.png",
	"link":"https://shorten.asia/AxBSkDU8",
	},
	{
	"caption":"TIKI Mom",
	"src":"https://salt.tikicdn.com/cache/w1080/ts/banner/76/82/9d/cd27350f0800d7562b02dac7832ef86a.png.webp",
	"link":"https://shorten.asia/ZFmSVrRq",
	},
	{
	"caption":"TIKI Mọt sách ",
	"src":"https://salt.tikicdn.com/cache/w1080/ts/banner/06/3a/df/fc6b6eca994c362cefff33e6f35036a2.png.webp",
	"link":"https://shorten.asia/j81UhftS",
	},
	{
	"caption":"TIKI Bách hóa",
	"src":"https://salt.tikicdn.com/cache/w1080/ts/banner/ed/b8/b9/8fbe0ff46848364ff6dd715d4e9287ed.png.webp",
	"link":"https://shorten.asia/a57WbuC5",
	},
	{
	"caption":"TIKI MOM CLUB",
	"src":"https://salt.tikicdn.com/cache/w1080/ts/banner/e7/20/5c/16ec7f5b4a7198aa9bc67dd5a845c8f6.png.webp",
	"link":"https://shorten.asia/9nk1DfcW",
	},
  ],
	
  container: {
    'max-width': '100%',
    height: `335px`,
    'max-height': '450px'
  },

  captionFontCSS: {"font-size": "25px" },
  autoSlide: true,
  changeTime: 5000,
  showArrow: true,
  mode: 'slide' };

if(screen.width > 0 && screen.width <= 640){obj.container.height = '140px'}else
if(screen.width > 640 && screen.width <= 1500){obj.container.height = '335px'}


$(document).ready(function () {

  //  Default CSS Setting
  let containerCSS = {
    'max-width': '980px',
    height: '390px' };

  containerCSS['max-width'] = obj.container['max-width'];
  containerCSS.height = obj.container.height;
  console.log(containerCSS);

  $('#view-slide').css(containerCSS);

  //  Loading Data
  if (Array.isArray(obj.data)) {
    let currentNumber = 0;
    let totalSlideNumber = obj.data.length - 1;

    //  如果只有一張圖片，隱藏左右箭頭
    if (totalSlideNumber == 0) {
      $('.slideButton').remove();
    }

    //  Default DOM setting
    obj.data.forEach((item, index) => {
      $("#slideItem").append('<a href=' + item.link + ' target="_blank"><div class="slideItem item' + index + '"></div></a>');
      //$('#slideCaption').append('<li>' + item.caption + '</li>');
      $('#slideNav').append('<li data-navitem="' + index + '"><div class="slideNavItem"></div></li>');

    });
    $('#slideNav').find('li').first().addClass('active');
    let slideWidth = $("#view-slide").width();
    let slideHeight = $("#view-slide").height();
    //  setting CSS to adjust slide
    $('.banner').css({
      'width': slideWidth * (totalSlideNumber + 1),
      'height': slideHeight });

    $('.slideItem').css({
      'width': slideWidth,
      'height': slideHeight });

    $('.caption').css('width', slideWidth);
    $('.caption').find('ul').css('width', slideWidth * (totalSlideNumber + 1));
    $('.caption').find('li').css('width', slideWidth);

    obj.data.forEach((item, index) => {
      $('.item' + index).css('background-image', 'url(' + item.src + ')');
    });

    //  SlideFunction
    let checkSlideNumber = (slideNumber, totalSlide) => {
      if (slideNumber < 0) {
        return totalSlide;
      } else if (slideNumber > totalSlide) {
        return 0;
      } else {
        return slideNumber;
      }
    };

    let changeSlide = () => {
      currentNumber = checkSlideNumber(currentNumber, totalSlideNumber);
      $('.banner').animate({
        'left': -slideWidth * currentNumber },
      400);
      $('.caption ul').animate({
        'left': -slideWidth * currentNumber },
      400);
      $('.slideNav li').removeClass('active');
      $('.slideNav li:eq(' + currentNumber + ')').addClass('active');
    };

    //  slideArrowButton
    $('.slideButtonRight').on('click', () => {
      currentNumber++;
      changeSlide();
    });
    $('.slideButtonLeft').on('click', () => {
      currentNumber--;
      changeSlide();
    });

    //  slideNavButton
    $('.slideNav').find('li').on('click', function () {
      currentNumber = $(this).data('navitem');
      changeSlide();
    });

    //  SetInterval
    let changeTime = obj.changeTime || 3000;
    if (!(obj.autoSlide === false)) {
      let auto = () => {
        currentNumber++;
        changeSlide();
      };
      let clock = setInterval(auto, changeTime);

      //  Stop while hovering
      $('.banner, .slideButton').hover(() => clearInterval(clock), () => clock = setInterval(auto, changeTime));
    }

    //  Set Slide Show Mode
    let slideShowMode = obj.mode;
    let modeSlide = () => {
      $('.caption').addClass('mode-slide');
    };
    let modeCenter = () => {
      $('.caption').addClass('mode-center');
    };
    switch (slideShowMode) {
      case 'slide':
        modeSlide();
        break;

      case 'center':
        modeCenter();
        break;

      default:
        modeSlide();}


  }

  if (obj.showArrow) {
    if (obj.showArrow === false) $('.slideButton').remove();
  }

  //  setting customer caption font
  if (obj.captionFontCSS) {
    delete obj.captionFontCSS.width;
    $('.caption').find('li').css(obj.captionFontCSS);
  }
  
});
