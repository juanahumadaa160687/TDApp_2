import { Animation, AnimationController } from '@ionic/angular';

export const enterAnimation = (baseEl: HTMLElement, opts?: any): Animation => {
    const DURATION = 500;
    const animationCtrl = new AnimationController();
    if (opts.direction === 'forward') {
        return animationCtrl.create()
        .addElement(opts.enteringEl)
        .duration(DURATION)
        .easing('ease-in')
        .fromTo('opacity', '0', '1')
        .fromTo('transform', 'translateX(100%)', 'translateX(0)');
    } else {
        const rootAnimation = animationCtrl.create()
        .addElement(opts.enteringEl)
        .duration(DURATION)
        .easing('ease-in')
        .fromTo('opacity', '0', '1')
        .fromTo('transform', 'translateX(-100%)', 'translateX(0)');
        return rootAnimation;
    }
}