# Vue-Form-Builder: Views

This folder contains all of the View Component for the:
- FormBuilder
- FormRenderer

Why? Because I need to split it up as small as possible. Might be 
hard for newcomer to understand. But in the long run, this is the best way we can maintain.

Also, me, think this is a good strategy. And easy to learn too. Keep 1 component in 1 Scope only. Nothing more, nothing less.

## Structural
- builder: Different parts to build the `FormBuilder`
    - section-views: Section View Template (Normal, Toggleable, Table,...)
    - row-views: Row View Template (Table Row)
    - add-controls: Controls that help us to Add Section/Row/Control
    - sidebar-config-views: View for GlobalSidebar
    - control-views: Related View for the Control
- controls: Control Item (Final Render) in here

## Flows
- FormBuilder
    - FormConfiguration
    - SectionContainer
        - SectionView (`section-views`)
            - Row? (Normal/Toggle don't have rows) (`row-views`)
                - ControlView
            - ControlView
    - GlobalSidebar


< Phat Tran >