export interface Album {
    title: string;
    albumId: string; 
}

export interface Artist {
    artName: string;
    albums: Album[];
}

export interface simpleArtist {
  name: string | null;
  artistId: number;
}