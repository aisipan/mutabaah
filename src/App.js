import React from "react";
import { Root } from "native-base";
import { StackNavigator, DrawerNavigator } from "react-navigation";

import Home from "./screens/home/";
import HifdJadid from "./screens/hifd_jadid";
import Murajaah from "./screens/murajaah";
import PilihJuz from "./screens/pilih_juz/";
import Ujian from "./screens/ujian/";
import ProgresSiswa from "./screens/progres_siswa/";
// import Anatomy from "./screens/anatomy/";
// import ListSwipe from "./screens/listSwipe/";
// import NHList from "./screens/list/";
// import NHSearchbar from "./screens/searchbar/";
// import NHTab from "./screens/tab/";
import SideBar from "./screens/sidebar";
// import NHDatePicker from "./screens/datepicker/";

const Drawer = DrawerNavigator(
  {
    Home: { screen: Home },
    HifdJadid: { screen: HifdJadid },
    Murajaah: { screen: Murajaah },
    ProgresSiswa: { screen: ProgresSiswa },
    Ujian: { screen: Ujian }
  },
  {
    initialRouteName: "Home",
    contentOptions: {
      activeTintColor: "#e91e63"
    },
    contentComponent: props => <SideBar {...props} />
  }
);

const AppNavigator = StackNavigator(
  {
    Drawer: { screen: Drawer },

    PilihJuz: { screen: PilihJuz }

    // Header1: { screen: Header1 },
    // Header2: { screen: Header2 },
    // Header3: { screen: Header3 },
    // Header4: { screen: Header4 },
    // Header5: { screen: Header5 },
    // Header6: { screen: Header6 },
    // Header7: { screen: Header7 },
    // Header8: { screen: Header8 },
    // HeaderSpan: { screen: HeaderSpan },
    // HeaderNoShadow: { screen: HeaderNoShadow },
    // HeaderNoLeft: { screen: HeaderNoLeft },
    // HeaderTransparent: { screen: HeaderTransparent },

    // BasicFooter: { screen: BasicFooter },
    // IconFooter: { screen: IconFooter },
    // IconText: { screen: IconText },
    // BadgeFooter: { screen: BadgeFooter },

    // Default: { screen: Default },
    // Outline: { screen: Outline },
    // Rounded: { screen: Rounded },
    // Block: { screen: Block },
    // Full: { screen: Full },
    // Custom: { screen: Custom },
    // Transparent: { screen: Transparent },
    // IconBtn: { screen: IconBtn },
    // Disabled: { screen: Disabled },

    // BasicCard: { screen: BasicCard },
    // NHCardItemBordered: { screen: NHCardItemBordered },
    // NHCardItemButton: { screen: NHCardItemButton },
    // NHCardImage: { screen: NHCardImage },
    // NHCardShowcase: { screen: NHCardShowcase },
    // NHCardList: { screen: NHCardList },
    // NHCardHeaderAndFooter: { screen: NHCardHeaderAndFooter },
    // NHCardTransparent: { screen: NHCardTransparent },
    // NHCardCustomBorderRadius: { screen: NHCardCustomBorderRadius },

    // SimpleDeck: { screen: SimpleDeck },
    // AdvancedDeck: { screen: AdvancedDeck },

    // BasicFab: { screen: BasicFab },
    // MultipleFab: { screen: MultipleFab },

    // FixedLabel: { screen: FixedLabel },
    // InlineLabel: { screen: InlineLabel },
    // FloatingLabel: { screen: FloatingLabel },
    // PlaceholderLabel: { screen: PlaceholderLabel },
    // StackedLabel: { screen: StackedLabel },
    // RegularInput: { screen: RegularInput },
    // UnderlineInput: { screen: UnderlineInput },
    // RoundedInput: { screen: RoundedInput },
    // IconInput: { screen: IconInput },
    // SuccessInput: { screen: SuccessInput },
    // ErrorInput: { screen: ErrorInput },
    // DisabledInput: { screen: DisabledInput },
    // PickerInput: { screen: PickerInput },
    // TextArea: { screen: TextArea },

    // Icons: { screen: Icons },
    // BasicIcon: { screen: BasicIcon },
    // StateIcon: { screen: StateIcon },
    // PlatformSpecificIcon: { screen: PlatformSpecificIcon },
    // IconFamily: { screen: IconFamily },

    // RowNB: { screen: RowNB },
    // ColumnNB: { screen: ColumnNB },
    // NestedGrid: { screen: NestedGrid },
    // CustomRow: { screen: CustomRow },
    // CustomCol: { screen: CustomCol },

    // NHBasicList: { screen: NHBasicList },
    // NHListItemSelected: { screen: NHListItemSelected },
    // NHListDivider: { screen: NHListDivider },
    // NHListSeparator: { screen: NHListSeparator },
    // NHListHeader: { screen: NHListHeader },
    // NHListIcon: { screen: NHListIcon },
    // NHListAvatar: { screen: NHListAvatar },
    // NHListThumbnail: { screen: NHListThumbnail },
    // NHListItemNoIndent: { screen: NHListItemNoIndent },

    // BasicListSwipe: { screen: BasicListSwipe },
    // SwipeRowCustomStyle: { screen: SwipeRowCustomStyle },
    // MultiListSwipe: { screen: MultiListSwipe },

    // RegularPicker: { screen: RegularPicker },
    // PickerWithIcon: { screen: PickerWithIcon },
    // PlaceholderPicker: { screen: PlaceholderPicker },
    // PlaceholderPickerNote: { screen: PlaceholderPickerNote },
    // BackButtonPicker: { screen: BackButtonPicker },
    // PickerTextItemText: { screen: PickerTextItemText },
    // HeaderPicker: { screen: HeaderPicker },
    // HeaderStylePicker: { screen: HeaderStylePicker },
    // CustomHeaderPicker: { screen: CustomHeaderPicker },
    // PickerWithIconStyle: { screen: PickerWithIconStyle },

    // NHCustomRadio: { screen: NHCustomRadio },
    // NHDefaultRadio: { screen: NHDefaultRadio },

    // BasicTab: { screen: BasicTab },
    // ConfigTab: { screen: ConfigTab },
    // ScrollableTab: { screen: ScrollableTab },

    // BasicSegment: { screen: BasicSegment },
    // AdvSegment: { screen: AdvSegment },
    // SegmentHeaderIcon: { screen: SegmentHeaderIcon },

    // BasicToast: { screen: BasicToast },
    // ToastDuration: { screen: ToastDuration },
    // ToastPosition: { screen: ToastPosition },
    // ToastType: { screen: ToastType },
    // ToastText: { screen: ToastText },
    // ToastButton: { screen: ToastButton },

    // RegularActionSheet: { screen: RegularActionSheet },
    // IconActionSheet: { screen: IconActionSheet },

    // AccordionDefault: { screen: AccordionDefault },
    // AccordionIcon: { screen: AccordionIcon },
    // AccordionIconStyle: { screen: AccordionIconStyle },
    // AccordionHeaderContentStyle: { screen: AccordionHeaderContentStyle },
    // AccordionCustomHeaderContent: { screen: AccordionCustomHeaderContent }
  },
  {
    initialRouteName: "Drawer",
    headerMode: "none"
  }
);

export default () =>
  <Root>
    <AppNavigator />
  </Root>;
