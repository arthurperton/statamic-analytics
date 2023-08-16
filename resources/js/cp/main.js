import Dashboard from './components/Dashboard';
import ResizeContainer from './components/ResizeContainer';

Statamic.booting(() => {
    Statamic.$components.register('resize-container', ResizeContainer);
    Statamic.$components.register('analytics-dashboard', Dashboard);
});
