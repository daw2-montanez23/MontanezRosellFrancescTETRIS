// Import our custom CSS
import '../scss/styles.scss'

// Import only the Bootstrap components we need
import { Dropdown, Offcanvas, Popover } from 'bootstrap';
import { panel } from './panels.js';
import { ModeloPieza } from './ModeloPieza.js';

panel.pintapanel()
panel.crearNuevaPieza()
panel.insertarPieza()
panel.pintapanel()
panel.controlTeclas()
panel.inicarMovimiento()