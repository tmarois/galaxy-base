export const variants = {
    'Avatar': {
        default: {
            wrapper: 'relative inline-flex',
            content: 'inline-flex items-center justify-center overflow-hidden cursor-default',
            contentSize: 'w-10 h-10 text-md font-medium',
            contentTheme: 'bg-gray-700 rounded-full text-white',
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
            themeColor: 'bg-gray-100 text-gray-800',
            removeButton: 'flex items-center justify-center relative -mr-1 h-4 w-4',
            removeButtonTheme: 'rounded-full hover:bg-gray-600/20 text-gray-800',
            removeIcon: 'h-3 w-3'
        }
    },
    'LoaderSpinner' : {
        default: {
            base: 'animate-spin',
            size: 'w-5 h-5',
            color: 'text-gray-200 dark:text-gray-600 fill-blue-600 dark:fill-blue-500',
            disabled: '!fill-gray-400',
        }
    },
    'LoaderLinear' : {
        default: {
            base: 'relative block w-full overflow-hidden',
            size: 'h-1',
            emptyColor: 'bg-blue-200 dark:bg-gray-700',
            fillColor: 'bg-blue-700',
            disabledEmptyColor: 'bg-gray-200 dark:bg-gray-700',
            disabledFillColor: 'bg-gray-400 dark:bg-gray-500',
        }
    },
    'LoaderProgress' : {
        default: {
            wrapper: 'relative block w-full overflow-hidden',
            size: 'h-4',
            bar: 'w-full rounded-full',
            barColor: 'bg-gray-200 dark:bg-gray-700',
            progressBar: 'rounded-full p-0.5',
            progressBarColor: 'bg-blue-600 dark:bg-blue-600 text-blue-100',
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
            body: 'grow',
            footerTheme: 'border-t border-gray-300',
            padding: 'p-4'
        }
    },
    'Dropdown' : {
        default: {
            wrapper: 'inline',
            theme: 'bg-white border rounded shadow-md',
            size: 'w-64'
        }
    },
    'Tooltip' : {
        default: {
            wrapper: 'inline',
            theme: 'bg-white border rounded shadow-md',
        }
    }
}