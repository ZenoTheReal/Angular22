import { Component, input, output } from '@angular/core';
import { MatAnchor } from "@angular/material/button";
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-test',
  imports: [MatAnchor, MatIcon],
  templateUrl: './test.html',
  styleUrl: './test.scss',
})
export class Test {
  data = input.required<string>();
  $clear = output<{ clear: boolean }>();

  clear() {
    this.$clear.emit({ clear: true })
  }
}
