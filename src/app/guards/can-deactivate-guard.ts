import { CanDeactivateFn } from '@angular/router';

export interface CanComponentDeactivate {
  podeSair(): boolean;
}

export const canDeactivateGuard: CanDeactivateFn<CanComponentDeactivate> =
  (component) => {
    return component.podeSair()
      ? true
      : confirm('Você tem alterações não salvas. Deseja sair?');
  };