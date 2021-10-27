import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export interface IPosition {
    x: number;
    y: number;
    z: number;
}

export interface IOrbitControls extends OrbitControls {
    target0?: IPosition;
}
