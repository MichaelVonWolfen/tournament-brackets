import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'lsac-match-item',
  styleUrl: 'match-item.sass',
  shadow: true,
})
export class MatchItem {
  /**
   * The possition of tne match-item
   */
  @Prop() bracketPosition:"top" | "bottom" | undefined;

  /**
   * The id of the team
   */
  @Prop() teamID:string

  /**
   * The name of the team that is competing
   */
  @Prop() teamName:string
  render() {
    // return <div>Hello, World! I'm {this.getText()}</div>;
    return(
      <div class={`container ${this.bracketPosition === "top"? 'top' : 'bottom'}`} >
        <div class="leftSide">{this.teamID}</div>
        <div class="rightSide">{this.teamName}</div>
      </div>
    );
  }
}
