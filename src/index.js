import MdCore from './core';
// import MdAvatar from './components/mdAvatar';
// import MdBottomBar from './components/mdBottomBar';
import MdButton from './components/mdButton';
import MdBackdrop from './components/mdBackdrop';
import MdInputContainer from './components/mdInputContainer';
import MdMenu from './components/mdMenu';
import MdSelect from './components/mdSelect';
import MdSpinner from './components/mdSpinner';
import MdSwitch from './components/mdSwitch';
import MdDialog from './components/mdDialog';
import MdList from './components/mdList';
import MdSnackbar from './components/mdSnackbar';
import MdIcon from './components/mdIcon';
import MdCheckbox from './components/mdCheckbox';
// import MdButtonToggle from './components/mdButtonToggle';
// import MdCard from './components/mdCard';
// import MdChips from './components/mdChips';
// import MdDivider from './components/mdDivider';
// import MdFile from './components/mdFile';
// import MdImage from './components/mdImage';
// import MdLayout from './components/mdLayout';
// import MdProgress from './components/mdProgress';
// import MdRadio from './components/mdRadio';
// import MdRatingBar from './components/mdRatingBar';
// import MdSidenav from './components/mdSidenav';
// import MdSpeedDial from './components/mdSpeedDial';
// import MdSubheader from './components/mdSubheader';
// import MdTable from './components/mdTable';
// import MdTabs from './components/mdTabs';
// import MdToolbar from './components/mdToolbar';
// import MdTooltip from './components/mdTooltip';
// import MdWhiteframe from './components/mdWhiteframe';

const options = {
  MdCore,
  MdButton,
  MdSwitch,
  MdInputContainer,
  MdMenu,
  MdSelect,
  MdSpinner,
  MdDialog,
  MdList,
  MdBackdrop,
  MdSnackbar,
  MdIcon,
  MdCheckbox
  // MdAvatar,
  // MdBottomBar,
  // MdButtonToggle,
  // MdCard,
  // MdChips,
  // MdDivider,
  // MdFile,
  // MdImage,
  // MdLayout,
  // MdProgress,
  // MdRadio,
  // MdRatingBar,
  // MdSidenav,
  // MdSpeedDial,
  // MdSubheader,
  // MdTable,
  // MdTabs,
  // MdToolbar,
  // MdTooltip,
  // MdWhiteframe
};

options.install = (Vue) => {
  for (let component in options) {
    const componentInstaller = options[component];

    if (componentInstaller && component !== 'install') {
      Vue.use(componentInstaller);
    }
  }
};

export default options;
