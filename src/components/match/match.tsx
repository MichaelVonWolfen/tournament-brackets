import { Component, h } from '@stencil/core';

@Component({
  tag: 'lsac-match',
  styleUrl: 'match.sass',
  shadow: true,
})
export class Match {
    StyleChange(e, isHovered){
      const selected = e.target.shadowRoot.querySelector(".container .rightSide")
      if(isHovered)
        selected.classList.add("hovered")
      else
        selected.classList.remove("hovered")
    }
  render() {
    return (
      <div class="container">
        <span class={"matchNumber"}>99</span>
        <lsac-match-item
          bracketPosition="top"
          teamID={"1"}
          teamName={"Echipa 1"}
          onPointerOver={(e) => this.StyleChange(e, true)}
          onPointerLeave={(e) => this.StyleChange(e, false)}
        ></lsac-match-item>
        <lsac-match-item
          bracketPosition="bottom"
          teamID={"2"}
          teamName={"Echipa 2"}
          onPointerOver={(e) => this.StyleChange(e, true)}
          onPointerLeave={(e) => this.StyleChange(e, false)}
        ></lsac-match-item>
      </div>
    );
  }
}
