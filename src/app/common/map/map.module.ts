import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { CommonModule } from '@angular/common';

import { MapComponent } from './map.component';
import { CamelizePipe } from 'ngx-pipes';
import { MapService } from './map.service';

@NgModule({
  declarations: [
    MapComponent
  ],
  exports: [
      MapComponent
  ],
  imports: [
      AgmCoreModule.forRoot({
          apiKey: 'AIzaSyCytI5t5CNIaAbJ1mc9flXq2Xg1_qMwcIY'
      }),
      CommonModule
  ],

  providers: [ 
      MapService,
      CamelizePipe
    ]

})
export class MapModule { }