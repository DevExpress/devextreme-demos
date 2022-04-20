The Tabs component contains items that you can use to switch between pages or views. You can display Tabs items from an [items](/Documentation/ApiReference/UI_Components/dxTabs/Configuration/items/) array or a [dataSource](/Documentation/ApiReference/UI_Components/dxTabs/Configuration/#dataSource). 

## Configure Tabs with Overflow

The Tabs component outstretches to fit the container, if you do not specify the component's [width](/Documentation/ApiReference/UI_Components/dxTabs/Configuration/#width). When the overflow happens, the navigation buttons appear, and users can scroll through the items. You can specify [showNavButtons](/Documentation/ApiReference/UI_Components/dxTabs/Configuration/#showNavButtons) and [scrollByContent](/Documentation/ApiReference/UI_Components/dxTabs/Configuration/#scrollByContent) properties to control this behavior.

## Custmoize Item Appearance

You can define the [itemTemplate](/Documentation/ApiReference/UI_Components/dxTabs/Configuration/#itemTemplate) to customize item appearance. If you use the **items** array, you can define specific fields in item data objects. For example, you can add an [icon](/Documentation/ApiReference/UI_Components/dxTabs/Configuration/items/#icon) or a [badge](/Documentation/ApiReference/UI_Components/dxTabs/Configuration/items/#badge).

## Process Clicked Items

Specify the [selectedIndex](/Documentation/ApiReference/UI_Components/dxTabs/Configuration/#selectedIndex) property to select a specific item. Use the [onItemClick](/Documentation/ApiReference/UI_Components/dxTabs/Configuration/#onItemClick) function to process clicked items.
