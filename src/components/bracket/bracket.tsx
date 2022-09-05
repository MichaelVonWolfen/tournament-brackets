import { Component, h } from '@stencil/core';

@Component({
  tag: 'lsac-bracket',
  styleUrl: 'bracket.sass',
  shadow: true,
})
export class Bracket {
  SPACE_BETWEEN_ROUNDS = "40px";
  getMatchItemHeight() : number {
    const matchItem = document.querySelector("lsac-match");
    if(!matchItem) return 0;

    console.log(matchItem.clientHeight)

    return matchItem.clientHeight;
  }
  render() {
    // return <div>Hello, World! I'm {this.getText()}</div>;
    return (
      <div class={"bracket"}
            style = {{
              "--gap":this.SPACE_BETWEEN_ROUNDS,
              padding:"0 30px"
            }}>
        <div class={"container"}>
          <lsac-match></lsac-match>
          <lsac-match></lsac-match>
          <lsac-match></lsac-match>
          <lsac-match></lsac-match>
          <lsac-match></lsac-match>
          <lsac-match></lsac-match>
          <lsac-match></lsac-match>
          <lsac-match></lsac-match>
          <lsac-match></lsac-match>
          <lsac-match></lsac-match>
          <lsac-match></lsac-match>
          <lsac-match></lsac-match>
          <lsac-match></lsac-match>
          <lsac-match></lsac-match>
          <lsac-match></lsac-match>
          <lsac-match></lsac-match>
          <lsac-match></lsac-match>
          <lsac-match></lsac-match>
          <lsac-match></lsac-match>
          <lsac-match></lsac-match>
          <lsac-match></lsac-match>
          <lsac-match></lsac-match>
          <lsac-match></lsac-match>
          <lsac-match></lsac-match>
          <lsac-match></lsac-match>
          <lsac-match></lsac-match>
          <lsac-match></lsac-match>
          <lsac-match></lsac-match>
          <lsac-match></lsac-match>
          <lsac-match></lsac-match>
          <lsac-match></lsac-match>
          <lsac-match></lsac-match>
        </div>
        <div class={"container"}>
          <lsac-match></lsac-match>
          <lsac-match></lsac-match>
          <lsac-match></lsac-match>
          <lsac-match></lsac-match>
          <lsac-match></lsac-match>
          <lsac-match></lsac-match>
          <lsac-match></lsac-match>
          <lsac-match></lsac-match>
          <lsac-match></lsac-match>
          <lsac-match></lsac-match>
          <lsac-match></lsac-match>
          <lsac-match></lsac-match>
          <lsac-match></lsac-match>
          <lsac-match></lsac-match>
          <lsac-match></lsac-match>
          <lsac-match></lsac-match>
        </div>
        <div class={"container"}>
          <lsac-match></lsac-match>
          <lsac-match></lsac-match>
          <lsac-match></lsac-match>
          <lsac-match></lsac-match>
          <lsac-match></lsac-match>
          <lsac-match></lsac-match>
          <lsac-match></lsac-match>
          <lsac-match></lsac-match>
        </div>
      <div class={"container"}>
        <lsac-match></lsac-match>
        <lsac-match></lsac-match>
        <lsac-match></lsac-match>
        <lsac-match></lsac-match>
      </div>
      <div class={"container"}>
        <lsac-match></lsac-match>
        <lsac-match></lsac-match>
      </div>
      <div class={"container"}>
        <lsac-match></lsac-match>
      </div>
      </div>
    );
  }
}
