import { Component, ContentChild, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: "app-server-element",
  templateUrl: "./server-element.component.html",
  styleUrls: ["./server-element.component.css"]
  //encapsulation: ViewEncapsulation.None
})
export class ServerElementComponent implements OnInit {
  @Input("srvElement") element: { type: string; name: string; content: string };
  @ViewChild("heading", { static: true }) header: ElementRef;
  @ContentChild("contentParagraph", { static: true }) paragraph: ElementRef;
  constructor() {}

  ngOnInit() {
    console.log("text content " + this.header.nativeElement.textContent);
    console.log("text paragraph " + this.paragraph.nativeElement.textContent);
  }
  ngAfterViewInit() {
    console.log("text content " + this.header.nativeElement.textContent);
    console.log("text paragraph " + this.paragraph.nativeElement.textContent);
  }
}
