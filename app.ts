// Exercise 40 "Album".
// Define the process to make album.
function make_Album(artist_name: string, album_tilte: string, tracks?: number){
    let album: {artist: string, title: string, tracks?: number} = {
        artist: artist_name ,
        title: album_tilte , 
    };
    if (tracks !== undefined){
        album.tracks = tracks;
    }
    return album;
}
// Now, call the funtion with different values & creating three variables.
let album1 = make_Album("Taimour Baig", "Album title 01");
let album2 = make_Album("Atif Aslam", "Album title 02");
let album3 = make_Album("Talha Anjum", "Album title 03" , 10);
// Print values of the objct which are created by functions.
console.log(album1);
console.log(album2);
console.log(album3);