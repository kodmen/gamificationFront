import { NgSwitch } from '@angular/common';
import { Directive, DoCheck, Host, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appJrSwitchCases]'
})
export class JrSwitchCasesDirective implements OnInit, DoCheck {
  private ngSwitch: any;
  private _crated = false;

  @Input()
  jrSwitchCases: any[];

  constructor(
    private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<Object>,
    @Host() ngSwitch: NgSwitch
  ) {
    this.ngSwitch = ngSwitch;
   }

   ngOnInit(): void {
       (this.jrSwitchCases || []).forEach(()=> this.ngSwitch._addCase());
   }

   ngDoCheck(): void {
       let enforce = false;
       (this.jrSwitchCases || []).forEach(value => enforce = this.ngSwitch._matchCase(value) || enforce)
       this.enforceState(enforce);
   }

   enforceState(created: boolean){
     if(created && !this._crated){
       this._crated = true;
       this.viewContainer.createEmbeddedView(this.templateRef);
     }else if(!created && !this._crated){
       this._crated = false;
       this.viewContainer.clear();
     }
   }
}
