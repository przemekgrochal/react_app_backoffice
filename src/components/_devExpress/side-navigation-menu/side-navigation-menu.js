import React, {
  useEffect,
  useRef,
  useCallback,
  useMemo,
  useState
} from 'react';
import TreeView from 'devextreme-react/tree-view';
import { navigation } from '../../../routes/app-navigation';
import { useNavigation } from '../../../contexts/navigation';
import { useScreenSize } from '../../../utils/media-query';
import './side-navigation-menu.scss';
import { useSelector } from 'react-redux';

import * as events from 'devextreme/events';

export default function (props) {
  const {
    children,
    selectedItemChanged,
    openMenu,
    compactMode,
    onMenuReady
  } = props;

  const themeDark = useSelector((state) => state.themes.darkTheme);
  const { isLarge } = useScreenSize();
  const items = useMemo(
    () => navigation.map((item) => ({ ...item, expanded: isLarge })),
    []
  );

  const {
    navigationData: { currentPath }
  } = useNavigation();


  const treeViewRef = useRef();
  const wrapperRef = useRef();
  const getWrapperRef = useCallback(
    (element) => {
      const prevElement = wrapperRef.current;
      if (prevElement) {
        events.off(prevElement, 'dxclick');
      }

      wrapperRef.current = element;
      events.on(element, 'dxclick', (e) => {
        openMenu(e);
      });
    },
    [openMenu]
  );

  const searchFieldOptions = {
    mode: "search",
  }

  useEffect(() => {
    const treeView = treeViewRef.current && treeViewRef.current.instance;
    if (!treeView) {
      return;
    }

    if (currentPath !== undefined) {
      treeView.selectItem(currentPath);
      treeView.expandItem(currentPath);
    }

    if (compactMode) {
      treeView.collapseAll();
    }
  }, [currentPath, compactMode]);

  return (
    <div
      className={'dx-swatch-additional side-navigation-menu'}
      ref={getWrapperRef}
    >
      {children}
      <div
        className={`menu-container ${
          !themeDark ? 'border-right-dark bg-grey' : ''
        }`}
      >
        <TreeView
          className="tree-view"
          dataStructure="tree"
          activeStateEnabled
          ref={treeViewRef}
          items={items}
          keyExpr={'path'}
          selectionMode={'single'}
          focusStateEnabled={false}
          expandEvent={'click'}
          onItemClick={selectedItemChanged}
          onContentReady={onMenuReady}
          width={'100%'}
          searchMode="contains"
          searchEnabled
          animationEnabled
        />
      </div>
    </div>
  );
}
