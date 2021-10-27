import { makeAutoObservable } from 'mobx';
import storage from '@/utils/storage';

class ThemeInstance {
    isDark = storage.get<boolean>('isDark');
    constructor() {
        makeAutoObservable(this);
    }
    setIsDark(isDark: boolean): void {
        this.isDark = isDark;
    }
}

export default new ThemeInstance();
