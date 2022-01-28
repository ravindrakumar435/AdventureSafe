import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-songs-management',
  templateUrl: './songs-management.component.html',
  styleUrls: ['./songs-management.component.scss'],
})
export class SongsManagementComponent implements OnInit {
  songsForm: FormGroup;
  files: any = [];
  thambnailFile: any;
  bannerFile: any;
  audioFile: any;
  //audiofile: File;
  duration: number = 0;
  constructor(private fb: FormBuilder) {
    this.songsForm = this.fb.group({
      songName: [''],
      duration: [''],
      description: [''],
    });
  }

  ngOnInit(): void {}

  uploadThambnail(event: any) {
    this.thambnailFile = event.target.files[0];
    console.log(event.target.files[0]);
  }
  uploadBanner(event: any) {
    this.bannerFile = event.target.files[0];
    console.log(event.target.files[0]);
  }
  Submit() {
    let obj = {
      songName: this.songsForm.value.songName,
      duration: this.songsForm.value.duration,
      description: this.songsForm.value.description,
    };
    console.log(obj, 'data');
  }

  // handleFileInput(files: FileList) {
  //   this.audiofile = files[0];
  //   new Audio(URL.createObjectURL(this.audiofile)).onloadedmetadata = (
  //     e: any
  //   ) => {
  //     this.duration = e.currentTarget.duration;
  //   };
  // }
  fileSelected(event: any) {
    this.audioFile = event.target.files[0];

    let duration: any;

    //here you can check the file type for attachedFile either video or audio

    var audio = document.createElement('audio');
    audio.preload = 'metadata';

    audio.onloadedmetadata = function () {
      window.URL.revokeObjectURL(audio.src);
      duration = audio.duration; // here you could get the duration
      console.log(duration, 'duration');
    };

    audio.src = URL.createObjectURL(this.audioFile);
    console.log(audio.src, ' audio.src');
  }
}
