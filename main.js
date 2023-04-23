// 1. render song
// 2. scrroll top 
// 3. play / pause / seek
// 4. CD rotate
// 5. next / prev
// 6. random 
// 7. next repeat when ended
// 8. active song 
// 9. scrrol active song into view
// 10. play song when click 


const $ = document.querySelector.bind(document)

const $$ = document.querySelectorAll.bind(document)

const cd = $('.cd')
const heading =  $('header h2')
const cdThumb = $('.cd-thumb')
const audio = $('#audio')
const playBtn = $('.btn-toggle-play')
const player = $('.player')
const progress = $('#progress')
const prevBtn = $(".btn-prev");
const nextBtn = $(".btn-next");
const randomBtn = $('.btn-random')
const repeatBtn =$('.btn-repeat')
const playlist =$('.playlist')
const app = {
    curruntIndex : 0,
    isPlaying : false,
    isRandom: false,
    isRepeat: false,
    songs :[
        {
            name : 'chúng ta của hiện tại ',
            singer: ' Sơn tùng mtp',
            path: 'assets/mussic/Chung-Ta-Cua-Hien-Tai-Son-Tung-M-TP.mp3',
            image :'assets/img/ctcht.jpg'
        },
        {
            name :  'Cơn mưa xa dần' ,
            singer: ' sơn Tùng Mtp ',
            path: 'assets/mussic/ConMuaXaDan-SonTungMTP-8033250.mp3',
            image :'assets/img/conmuaxadan.jpg'
        },

        {
            name :  'Sakura' ,
            singer: ' Ikimono Gakari ',
            path: 'assets/mussic/Sakura-IkimonoGakari-39038.mp3',
            image :'assets/img/sakura.webp'
        },
        {
            name :  'Đồng thoại' ,
            singer: 'Michael Wong',
            path: 'assets/mussic/DongThoai-MichaelWongQuangLuong-161624.mp3',
            image :'assets/img/dongthoai.jpg'
        },
        {
            name :  'Nỗi gió rồi ' ,
            singer: 'Châu Thâm ',
            path: 'assets/mussic/Ni Gio Ri Chau Tham (nhactrung.wapkiz.com) (1).mp3',
            image :'assets/img/noigioroi.jpg'
        },
        {
            name :  'Kiêu  ngạo ' ,
            singer: 'en ',
            path: 'assets/mussic/Ni Gio Ri Chau Tham (nhactrung.wapkiz.com) (1).mp3',
            image :'assets/img/kieungao.jpg'
        },
        {
            name :  'Tự sự ' ,
            singer: 'Orange ',
            path: 'assets/mussic/TuSuQuaBenLamChiOst-Orange-7564924.mp3',
            image :'assets/img/tusu.jpg'
        },
        {
            name :  'Răng khôn' ,
            singer: ' Phí Phương Anh',
            path: 'assets/mussic/RangKhon-PhiPhuongAnhTheFaceRIN9-7006388.mp3',
            image :'assets/img/rangkhon.jpg'
        },
        {
            name :  'Dấu mưa' ,
            singer: ' Trung Quân',
            path: 'assets/mussic/DauMua-TrungQuanIdol-2640897.mp3',
            image :'assets/img/daumua.jpg'
        },
        {
            name : 'Không cần phải hứa đâu em ' ,
            singer: ' Hồng Dương',
            path: 'assets/mussic/KhongCanPhaiHuaDauEm-KhaiDang-7129808.mp3',
            image :'assets/img/khongcanphaihuadauem.jpg'
        },
        {
            name :  'Suýt nữa thì' ,
            singer: ' Andiez',
            path: 'assets/mussic/SuytNuaThi-Andiez-7625469.mp3',
            image :'assets/img/suytnuathi.jpg'
        },
        {
            name :  'Bước qua nhau' ,
            singer: 'Vũ ',
            path: 'assets/mussic/Buoc Qua Nhau - Vu - NhacHay360.mp3',
            image :'assets/img/buocquanhau.jpg'
        },
        {
            name :  'Lily' ,
            singer:  'Alan Walker',
            path: 'assets/mussic/Lily-NightcoreAlanWalkerK391EmelieHollow-5852200.mp3',
            image :'assets/img/lily.jpg'
        },
        {
            name :  'Nevada' ,
            singer: ' Vicetone ',
            path: 'assets/mussic/[DownloadLaguGratis.Net] Vicetone Nevada ft. Cozi Zuehlsdorff.mp3',
            image :'assets/img/nevada.jpg'
        },
        {
            name :  'Cứ thở đi' ,
            singer: ' Đức Phúc x Juky San',
            path: 'assets/mussic/CuThoDi-DucPhucxJukySan-7455695.mp3',
            image :'assets/img/cuthodi.jpg'
        },
     
        {
            name : 'Gaho - Start ',
            singer: ' Itaewon Class OST',
            path: 'assets/mussic/Beginning-Gaho.mp3',
            image :'assets/img/gaho.jpg'
        },
        {
            name : 'My Love ',
            singer: 'Westlife ',
            path: 'assets/mussic/My-Love-Westlife.mp3',
            image :'assets/img/mylove.jpg'
        },
        {
            name : 'Monody ',
            singer: ' The Fat Rat',
            path: 'assets/mussic/Monody-TheFatRat-Laura-Brehm.mp3',
            image :'assets/img/thefatrat.jpg'
        },
        {
            name : 'Beautiful In White ',
            singer: ' Shane Filan',
            path: 'assets/mussic/Beautiful-In-White-Hero-Band.mp3',
            image :'assets/img/biw.jpg'
        },
        {
            name :  'That girl' ,
            singer: ' Onlly Murs',
            path: 'assets/mussic/olly-murs---that-girl.mp3',
            image :'assets/img/thatgirl.jpg'
        },
    ],
      
    render:function(){
        const htmls = this.songs.map((song, index) =>{
            return`
            <div class="song ${ index === this.curruntIndex? 'active' : '' }" data-index = '${index}'>   
                    
            <div class="thumb" style="background-image: url('${song.image}')">
            </div>
            <div class="body">
              <h3 class="title">${song.name}</h3>
              <p class="author">${song.singer}</p>
            </div>
            <div class="option">
              <i class="fas fa-ellipsis-h"></i>
            </div>
          </div>`
           
        })
        
 $('.playlist').innerHTML = htmls.join('')
    },
    defineProperties : function(){
        Object.defineProperty(this, 'currentSong',{
            get : function(){
                return this.songs[this.curruntIndex]
            }
        })
    },
    handleEvents : function(){
        const _this = this
        const cdWidth = cd.offsetWidth

        // xử lý cd quay và dừng 
       const cdThumbAnimate =  cdThumb.animate([
            {transform: ' rotate(360deg )'}
        ],{
            duration: 10000, // 10s
            iterations: Infinity
        })
        cdThumbAnimate.pause();
    

        // xử lý phóng to thu nhỏ cd
        document.onscroll = function () {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const newCdWidth = cdWidth - scrollTop;
            
      
            cd.style.width = newCdWidth > 0 ? newCdWidth + "px" : 0; 
            cd.style.opacity = newCdWidth / cdWidth;
          };

          // xử lý khi click play
          playBtn.onclick = function(){
            if(_this.isPlaying){
              
                audio.pause()
              
            }else{
               
                audio.play()
               
            }
          
          }

          // Khi song được play
          audio.onplay = function(){
            _this.isPlaying = true
            player.classList.add('playing')
            cdThumbAnimate.play()
          }

          // khi song pause
          audio.onpause = function(){
            _this.isPlaying = false
            player.classList.remove('playing')
            cdThumbAnimate.pause()
          }

          // kh tiến độ bài hát thay đổi
          audio.ontimeupdate = function(){
            if(audio.duration){
                const progressPercent = Math.floor(audio.currentTime / audio.duration * 100)
                progress.value = progressPercent
            }
           
           
          }

          // xử lý kh tua song
          progress.onchange = function(e){
            const seekTime = audio.duration / 100 * e.target.value
            audio.currentTime = seekTime
          }

          // khi next song 
          nextBtn.onclick = function(){
            if(_this.isRandom){
                _this.playRandomSong()
            }else{
                _this.nextSong()
            }
            
            audio.play()
            _this.render()
            _this.scrollTopActiveSong()
       

          }
           
          // khi prev song 
          prevBtn.onclick = function(){
            if(_this.isRandom){
                _this.playRandomSong()
            }else{
                _this.prevSong()
            }
         
            audio.play()
            _this.render()
            _this.scrollTopActiveSong()
           

          }

          // xử lý bật/ tắt random song
          randomBtn.onclick = function(e){
              _this.isRandom = !_this.isRandom
              randomBtn.classList.toggle('active',_this.isRandom)

          }

         // xử lý lặp lại một bài hát
        
              repeatBtn.onclick = function (e) {
                _this.isRepeat = !_this.isRepeat;
                repeatBtn.classList.toggle("active", _this.isRepeat);
              };

          // xử lý next song khi audio ended
          audio.onended = function(){
            if(_this.isRepeat){
                audio.play()
            }else{

                nextBtn.click()
            }
          }

          playlist.onclick = function (e) {
            const songNode = e.target.closest(".song:not(.active)");
      
            if (songNode || e.target.closest(".option")) {
              // Xử lý khi click vào song            
              if (songNode) {
                _this.curruntIndex = Number(songNode.dataset.index);
                _this.loadCrurrentSong();
                _this.render();
                audio.play();
              }
      

          }
        }
     
    },
    scrollTopActiveSong:function(){
        setTimeout( ()=>{
            $('.song.active').scrollIntoView({
                behavior:'smooth',
                block: 'nearest'
            })

        
        },300)
    },
   
    loadCrurrentSong: function(){
       

        heading.textContent = this.currentSong.name
        cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`
        audio.src = this.currentSong.path

    
    },
    nextSong: function(){
        this.curruntIndex = (this.curruntIndex + 1) % this.songs.length
         this.loadCrurrentSong()
     },
    prevSong: function(){
        this.curruntIndex = (this.curruntIndex - 1 + this.songs.length) % this.songs.length
        this.loadCrurrentSong()
    },
    playRandomSong: function(){
        let newIndex
        do{
            newIndex = Math.floor(Math.random()* this.songs.length)
        }while (newIndex === this.curruntIndex)
        this.curruntIndex = newIndex
        this.loadCrurrentSong()
    },
    start: function(){
        // định nghĩa thuộc tính cho object
        this.defineProperties()

        // lắng nghe / xử lý các sự kiện (DOM events)
        this.handleEvents()

        // tải thông tin bài hát đầu tiên vào UI khi chạy ứng dụng
        this.loadCrurrentSong()

        // render playlist
        this.render()
    }
}
app.start()