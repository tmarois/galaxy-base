export const variants = {
    'Expandable': {
        default: {
            group: '',
            groupTheme: 'shadow',
            panelWrapperNotGrouped: 'shadow',
            panelWrapperGrouped: '',
            panel: 'p-4 border cursor-pointer select-none',
            panelTheme: 'border-gray-200 hover:bg-gray-50',
            panelDisabled: '!cursor-not-allowed !text-gray-300 hover:!bg-gray-50',
            panelActive: '!bg-gray-100',
            panelTitle: 'text-md',
            panelTitleDisabled: '',
            panelArrowWrapper: 'text-gray-600',
            panelArrowWrapperDisabled: '!text-gray-300',
            panelArrowSize: 'w-4 h-4',
            panelContent: 'p-4 border border-gray-200 border-t-0'
        }
    },
    'Avatar': {
        default: {
            wrapper: 'relative inline-flex',
            content: 'inline-flex items-center justify-center overflow-hidden cursor-default',
            contentSize: 'w-10 h-10 text-md font-medium',
            contentTheme: 'bg-primary-700 rounded-full text-white',
            contentHover: 'hover:z-10 cursor-pointer',
            contentGrouped: 'border-2 border-white dark:border-gray-600',
            defaultPlaceholderWrapper: 'relative h-full w-full inline-flex justify-center items-center overflow-hidden',
            defaultPlaceholderIcon: 'absolute w-auto h-auto -bottom-1',
            statusDotSizePosition: 'bottom-0 left-7 absolute w-3 h-3',
            statusDotTheme: 'border-2 border-white rounded-full',
            statusDotOnline: 'bg-green-400',
            statusDotOffline: 'bg-gray-400',
            statusDotBusy: 'bg-red-500',
            statusDotAway: 'bg-yellow-500',
        }
    },
    'AvatarGroup' : {
        default: {
            content: 'flex -space-x-2'
        }
    },
    'Badge' : {
        default: {
            base: 'inline-flex items-center px-2 py-1 gap-x-0.5 cursor-default',
            theme: 'rounded text-sm font-normal',
            themeColor: 'bg-primary-100 text-primary-800',
            removeButton: 'flex items-center justify-center relative -mr-1 h-4 w-4',
            removeButtonTheme: 'rounded-full hover:bg-gray-600/20 text-gray-800',
            removeIcon: 'h-3 w-3'
        }
    },
    'Button' : {
        default: {
            base: 'whitespace-nowrap font-medium rounded border cursor-pointer',
            baseSize: 'text-sm px-4 py-2',
            baseSizeIconOnly: '!p-2',
            iconSize: 'w-4 h-4',
            normal: 'text-white bg-primary-700 hover:bg-primary-800 border-transparent',
            normalDisabled: 'text-white bg-gray-300 hover:bg-gray-300 border-transparent',
            outlined: 'text-primary-600 border-primary-400 hover:border-primary-800 hover:bg-gray-100 hover:border-primary-700',
            outlinedDisabled: 'text-gray-400 border-gray-300 hover:!border-gray-300',
            ghost: 'text-primary-600 hover:bg-gray-200 !border-transparent',
            ghostDisabled: 'text-gray-400 bg-gray-50 !border-transparent',
            shadow: 'shadow',
            disabled: '!cursor-not-allowed',
        }
    },
    'ButtonGroup' : {
        default: {
            content: 'btn-group inline-flex shadow'
        }
    },
    'LoaderSpinner' : {
        default: {
            base: 'animate-spin',
            size: 'w-5 h-5',
            color: 'text-gray-200 fill-primary-600',
            disabled: '!fill-gray-400',
        }
    },
    'LoaderLinear' : {
        default: {
            base: 'relative block w-full overflow-hidden',
            size: 'h-1',
            emptyColor: 'bg-primary-200',
            fillColor: 'bg-primary-700',
            disabledEmptyColor: 'bg-gray-200',
            disabledFillColor: 'bg-gray-400',
        }
    },
    'LoaderProgress' : {
        default: {
            wrapper: 'relative block w-full overflow-hidden',
            size: 'h-4',
            bar: 'w-full rounded-full',
            barColor: 'bg-primary-200',
            progressBar: 'rounded-full p-0.5',
            progressBarColor: 'bg-primary-600 dark:bg-primary-600 text-primary-100',
            insideLabelText: 'font-medium text-center text-xs leading-none',
            outsideLabelWrapper: 'flex justify-between mb-1',
            outsideLabelText: 'text-base font-medium',
            outsideLabelProgress: 'text-sm font-medium',
        }
    },
    'Card' : {
        default: {
            wrapper: 'flex flex-col w-full relative',
            detachedHeaderWrapper: 'flex items-center p-2',
            headerWrapper: 'flex items-center',
            headerTheme: 'border-b border-gray-200',
            headerTitleWrapper: 'grow',
            headerTitle: 'font-medium text-lg',
            headerSubtitle: 'font-normal text-md text-gray-500',
            headerActions: 'flex items-center',
            contentWrapper: 'flex flex-col w-full',
            contentTheme: 'rounded shadow border border-gray-200 bg-white',
            contentDisabled: 'absolute top-0 left-0 right-0 bottom-0 bg-white opacity-60',
            body: 'grow',
            footerTheme: 'border-t border-gray-300',
            padding: 'p-4'
        }
    },
    'Dropdown' : {
        default: {
            wrapper: 'inline',
            theme: 'bg-white rounded shadow-md',
            size: 'w-64'
        }
    },
    'Tooltip' : {
        default: {
            wrapper: 'inline',
            theme: 'bg-white border rounded shadow-md',
        }
    },
    'Pagination' : {
        default: {
            baseText: 'text-sm text-gray-500',
            currentPageText: 'text-black'
        }
    },
    'List' : {
        default: {
            listGroup: 'overflow-hidden border rounded',
            listGroupColor: 'text-gray-900 bg-white border-gray-200',
            listGroupText: 'text-md font-normal',
            listItem: 'inline-flex block items-center w-full border-b',
            listItemSize: 'px-4 py-2 ',
            listItemTheme: 'border-gray-200',
            listItemHover: 'cursor-pointer hover:bg-gray-100',
            listItemDivider: 'bg-gray-200',
            listItemDisabled: 'cursor-not-allowed bg-gray-50 text-gray-400',
            listItemBefore: 'w-5 h-5 text-gray-400 mr-2 flex items-center',
            listItemAfter: 'w-5 h-5 text-gray-400 flex items-center'
        },
        menu: {
            listGroup: 'overflow-hidden rounded border space-y-1 py-1',
            listGroupColor: 'text-gray-600 bg-white border-gray-200',
            listGroupText: 'text-sm font-normal',
            listItem: 'inline-flex block items-center w-full',
            listItemSize: 'px-4 py-2 ',
            listItemTheme: '',
            listItemHover: 'cursor-pointer hover:bg-gray-100',
            listItemDisabled: 'cursor-not-allowed bg-gray-50 text-gray-400',
            listItemDivider: 'bg-gray-200',
            listItemBefore: 'w-5 h-5 text-gray-400 mr-2 flex items-center',
            listItemAfter: 'w-4 h-4 text-gray-400 flex items-center'
        }
    },
    'Tabs': {
        default: {
            wrapper: '',
            tabListWrapper: '',
            tabList: 'flex space-x-4 items-center',
            tabItem: 'text-gray-500 rounded px-3 py-2 text-sm font-medium cursor-pointer',
            tabItemSelected: 'bg-primary-800 text-white rounded px-3 py-2 text-sm font-medium',
            tabItemDisabled: '!text-gray-400 !cursor-not-allowed',
            tabItemTitle: 'flex items-center',
            tabContentWrapper: '',
            tabContent: 'p-4'
        },
        underline: {
            wrapper: '',
            tabListWrapper: 'border-b border-gray-200',
            tabList: '-mb-px flex space-x-6 items-center',
            tabItem: 'cursor-pointer border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 whitespace-nowrap border-b-2 py-2.5 px-1 text-sm font-medium border-primary-600',
            tabItemSelected: '!border-primary-600 text-primary-600',
            tabItemDisabled: '!text-gray-400 !cursor-not-allowed',
            tabItemTitle: 'flex items-center justify-center text-center',
            tabContentWrapper: '',
            tabContent: 'p-4'
        }
    },
    'Label' : {
        default: {
            base: 'flex items-center select-none cursor-pointer',
            theme: 'text-sm font-medium text-gray-800',
            disabled: '!cursor-not-allowed !text-gray-400',
            errors: '!text-red-600',
            iconSize: 'w-4 h-4',
            icon: 'text-primary-600'
        }
    },
    'Checkbox' : {
        default: {
            wrapper: 'relative flex items-center text-gray-200',
            inputWrapper: 'elative cursor-pointer flex items-center',
            inputCheck: 'check-animation rounded focus:ring-0 h-4 w-4 cursor-pointer text-primary-600',
            inputRadio: 'radio rounded-full focus:ring-0 h-4 w-4 cursor-pointer text-primary-600',
            inputDisabled: '!cursor-not-allowed text-gray-300 border-gray-300',
            labelWrapper: 'pl-3 text-sm'
        }
    },
    'Toggle' : {
        default: {
            wrapper: 'relative flex items-center text-gray-200',
            inputWrapper: 'relative cursor-pointer flex items-center',
            labelFalseWrapper: 'pr-3 text-sm',
            labelWrapper: 'pl-3 text-sm',
            switchColor: 'bg-gray-400',
            switchColorChecked: 'bg-primary-600',
            switchColorBorderChecked: 'border-primary-600',
            switchColorBorder: 'border-gray-400',
            switchDisabledColor: 'bg-gray-100',
            switchDisabledColorChecked: 'bg-primary-200',
            switchDisabledColorBorderChecked: 'border-primary-200',
            switchFalseLabelColorChecked: '!text-gray-400',
            switchTrueLabelColorChecked: '!text-primary-600',
            switchTrueLabelColor:'!text-gray-400'
        }
    },
    'InputText': {
        default: {
            root: 'relative w-full',
            inputWrapper: 'grow relative',
            inputTheme: 'text-gray-800 border-slate-300 hover:bg-slate-50 bg-slate-50 hover:border-slate-400 focus:border-slate-700 hover:text-slate-900',
            input: 'block w-full rounded text-sm focus:outline-none focus:ring-0 border px-2 py-2',
            inputPrepend: 'rounded-l-none',
            prepend: 'inline-flex items-center px-3 text-sm text-gray-800 bg-gray-100 border border-r-0 border-gray-200 rounded-l-md',
            icon: 'pointer-events-none absolute inset-y-0 left-0 p-2 flex items-center text-gray-500',
            clearable: 'cursor-pointer absolute inset-y-0 right-0 p-2 flex items-center',
            counter: 'absolute text-right text-[11px] text-gray-600 right-0.5 -bottom-[21px]',
            disabled: 'cursor-default bg-gray-100 border-gray-200 focus:border-gray-200',
            readonly: 'cursor-default',
            errors: 'border-red-500 focus:border-red-500 text-red-500 hover:text-red-800'
        }
    },
    'InputArea': {
        default: {
            root: 'relative w-full',
            inputWrapper: 'grow relative',
            inputTheme: 'text-gray-800 border-slate-300 hover:bg-slate-50 bg-slate-50 hover:border-slate-400 focus:border-slate-700 hover:text-slate-900',
            input: 'block w-full rounded text-sm focus:outline-none focus:ring-0 border px-2 py-2',
            clearable: 'cursor-pointer absolute right-0 p-2 top-0',
            counter: 'absolute text-right text-[11px] text-gray-600 right-0.5 -bottom-[21px]',
            disabled: 'cursor-default bg-gray-100 border-gray-200 focus:border-gray-200',
            readonly: 'cursor-default',
            errors: 'border-red-500 focus:border-red-500 text-red-500 hover:text-red-800'
        }
    },
    'Table': {
        default: {
            wrapper: 'relative',
            table: 'min-w-full h-full text-sm text-left text-gray-500 divide-y divide-gray-300',
            thead: 'bg-gray-100',
            theadRow: 'divide-x divide-gray-200',
            theadColumn: 'my-auto px-4 py-2 font-normal whitespace-nowrap uppercase text-gray-700 text-xs align-middle',
            theadColumnLabel: 'font-bold',
            theadColumnSortIcon: 'w-3 h-3',
            theadColumnSortIconSorted: 'text-primary-600',
            theadColumnSorting: 'sortable cursor-pointer hover:bg-gray-200',
            theadColumnSorted: 'sorted bg-primary-100 hover:bg-primary-100 text-primary-700',
            theadColumnSelectAll: 'w-4 px-4 py-2',
            tbodyColumnSelectBorder: 'bg-primary-600',
            tbody: 'divide-y divide-gray-200',
            tbodyRow: 'hover:bg-gray-100 text-gray-800',
            tbodyRowSelected: '!bg-primary-50',
            tbodyColumn: 'px-4 py-3',
            tbodyColumnSelect: 'w-4 px-4 py-3',
            noData: 'text-center p-3',
            emptyCellText: 'text-gray-400'
        }
    },
    'Overlay': {
        default: {
            base: 'top-0 left-0 bottom-0 right-0 bg-gray-400 bg-opacity-60 z-40',
            theme: 'bg-black bg-opacity-60'
        }
    },
}