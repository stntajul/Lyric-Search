const searchBtn=document.getElementById('searchBtn');
let artist=[];
let title=[];
let album=[];
function getLyric(id){
    fetch(`https://api.lyrics.ovh/v1/${artist[id]}/${title[id]}`)
    .then(response=>response.json())
    .then(data=>{
        const lyricShow=document.getElementById('lyric');
        const a=document.createElement('a');
        a.innerHTML=`<a>${data.lyrics}</a>`;
        lyricShow.appendChild(a);
        console.log(data.lyrics);
        
    })
    //console.log(artist[id]);
}

searchBtn.addEventListener('click',function(){
    const searchItem=document.getElementById('searchItem').value;
    const apiUrl=`https://api.lyrics.ovh/suggest/${searchItem}`;
    const searchResult=document.getElementsByClassName('search-result');
    

  

    fetch(apiUrl)
    .then(response=>response.json())
    .then(data=>{
        const searchResultArea=document.getElementById('search-results');

        //console.log(data.data);
        for (let i = 0; i < 10; i++) {
          
            const element = data.data[i];
            artist[i]=element.artist.name;
            title[i]=element.title;
            album[i]=element.album;
            const p=document.createElement('p');
        p.innerHTML=`
        <p>${title[i]}" || " ${artist[i]}"  <button onclick="getLyric(${i})" id="${i}" class="btn btn-success">GetLyrics</button></p>`;
        searchResultArea.appendChild(p);
       
        }
   
        
        
        

    })
 
})

