<template>
    <div :class="variantClasses.wrapper">
        <table :class="variantClasses.table">
            <thead 
                v-if="!props.hideHeader && headerColumns.length" 
                :class="variantClasses.thead"
            >
                <tr :class="variantClasses.theadRow">
                    <th v-if="select" scope="col" :class="variantClasses.theadColumnSelectAll">
                        <slot name="select-all">
                            <div class="flex justify-center items-center">
                                <Checkbox
                                    v-if="!props.selectOne"
                                    v-model="state.selectedAll"
                                    @change="toggleAll"
                                    :disabled="props.loading"
                                    :variantCheckbox="props.variantCheckbox"
                                />
                            </div>
                        </slot>
                    </th>
                    <th v-for="(h, hindex) in headerColumns"
                        scope="col"
                        :key="hindex"
                        :class="{
                            [variantClasses.theadColumn]: true,
                            [variantClasses.theadColumnSorting]: h.sorting,
                            [variantClasses.theadColumnSorted]: h.sorted,
                            '!text-left': !h.align,
                            '!text-right': h.align === 'right',
                            '!text-center': h.align === 'center',
                        }"
                        :style="`${h.minWidth ? `min-width: ${h.minWidth}` : ''} ${h.width ? `width: ${h.width};` : ''}`"
                        @click="sortClicked(h, hindex)"
                    >
                        <slot :name="`header.${h.value}`" v-bind:header="h">
                            <div class="my-auto truncate flex items-center justify-center align-middle">
                                <div class="grow" :class="variantClasses.theadColumnLabel">{{ h.label }}</div>
                                <div 
                                    v-if="h.sorting" 
                                    class="sort-icon" 
                                    :class="{
                                        [variantClasses.theadColumnSortIcon]:true,
                                        [variantClasses.theadColumnSortIconSorted]:h.sorted
                                    }">
                                    <svg v-if="h.sorted === 'ASC'"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-auto h-auto"><path stroke-linecap="round" stroke-linejoin="round" d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75" /></svg>
                                    <svg v-else-if="h.sorted === 'DESC'" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-auto h-auto"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75" /></svg>
                                    <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-auto h-auto"><path stroke-linecap="round" stroke-linejoin="round" d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" /></svg>
                                </div>
                            </div>
                        </slot>
                    </th>
                </tr>
            </thead>
            <thead v-if="props.loading" style="position: relative; top: 0">
                <tr class="table-row-loading">
                    <th colspan="100%" class="border-none p-0 relative">
                        <LoaderLinear :variantLoaderLinear="props.variantLoaderLinear" />
                    </th>
                </tr>
            </thead>
            <tbody 
                v-if="props.rows && props.rows.length" 
                ref="tablebody"
                :class="variantClasses.tbody" 
            >
                <tr 
                    v-for="(row, i) in props.rows"
                    :key="i" 
                    :class="[
                        variantClasses.tbodyRow,
                        (row.class ? row.class : ''), 
                        (state.selection.includes(i) ? variantClasses.tbodyRowSelected : ''),
                        (props.selectRow || props.rowCursor) ? 'cursor-pointer' : ''
                    ]"
                    @click="selectRow(i, item, $event)"
                >
                    <td
                        v-if="select"
                        :class="variantClasses.tbodyColumnSelect"
                    >
                        <slot name="column.select">
                            <div class="flex items-center justify-center">
                                <Checkbox
                                    :value="state.selection.includes(i)"
                                    @change="toggleRow(i, 'selectRow', $event)"
                                    @click.stop=""
                                    :disabled="props.loading"
                                    :variantCheckbox="props.variantCheckbox"
                                    :radio="props.selectOne"
                                />
                            </div>
                        </slot>
                    </td>
                    <td 
                        v-for="(h) in headerColumns"
                        :key="h.value"
                        :class="[
                            variantClasses.tbodyColumn,
                            (!h.align) ? 'text-left' : '',
                            (h.align === 'right') ? 'text-right' : '',
                            (h.align === 'center') ? 'text-center' : '',
                            (row.class) ? row.class : '',
                            (h.class) ? h.class : ''
                        ]"
                        :style="`${h.minWidth ? `min-width: ${h.minWidth};` : ''} ${h.width ? `width: ${h.width};` : ''}`"
                    >
                        <slot :name="`column.${h.value}`" v-bind:column="row" v-bind:index="i">
                            <span v-if="getValue(row, h.value) !== null && getValue(row, h.value) !== '' && getValue(row, h.value)">
                                <span v-if="typeof h.formatValue === 'function'">{{ h.formatValue(getValue(row, h.value)) }}</span>
                                <span v-else>{{ getValue(row, h.value) }}</span>
                            </span>
                            <span v-else-if="h.hasOwnProperty('empty')" :class="variantClasses.emptyCellText">{{ h.empty }}</span>
                            <span v-else-if="props.emptyCellText" :class="variantClasses.emptyCellText">{{ props.emptyCellText }}</span>
                        </slot>
                    </td>
                </tr>
            </tbody>
            <tbody v-else ref="tablebody">
                <tr>
                    <td colspan="100%" :class="variantClasses.noData">
                        <slot name="nodata">{{ messageText }}</slot>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style>
.table-scrollbar::-webkit-scrollbar {
    width: 10px;
}
.table-scrollbar::-webkit-scrollbar-thumb {
    background-color: rgba(0,0,0,0.4);
    border-radius: 4px;
    border: 1px solid #fff;
}
.table-scrollbar::-webkit-scrollbar-track {
  position: absolute;
  right: -3rem;
  top: -50rem;
  background: transparent;
}
</style>

<script setup>
import { defineProps, defineEmits, useSlots, computed, ref, reactive, watch } from 'vue'
import { useVariantClasses } from '../../../composables/variantClasses'
import { getObjectValue } from '../../../utils/values'
import Checkbox from '../../Forms/Checkbox/Checkbox.vue'
import LoaderLinear from '../../Elements/Loader/LoaderLinear.vue'

const emit = defineEmits(['sort','click-row','selection']);
const props = defineProps({
    variant: {
        type: String,
        default: null
    },
    variantLoaderLinear: {
        type: String,
        default: null
    },
    variantCheckbox: {
        type: String,
        default: null
    },
    classes: {
        type: String,
        default: null
    },
    headers: {
        type: Array,
        default: () => []
    },
    rows: {
        type: Array,
        default: () => []
    },
    loading: {
        type: Boolean,
        default: false
    },
    noDataText: {
        type: String,
        default: 'No results found'
    },
    loadingText: {
        type: String,
        default: 'Loading... Please wait'
    },
    emptyCellText: {
        type: String,
        default: null
    },
    hideHeader: {
        type: Boolean,
        default: false
    },
    select: {
        type: Boolean,
        default: false
    },
    selectRow: {
        type: Boolean,
        default: false
    },
    selectOne: {
        type: Boolean,
        default: false
    },
    rowCursor: {
        type: Boolean,
        default: false
    },
    selectionField: {
        type: String,
        default: null
    },
});

const variantClasses = useVariantClasses('Table', props.variant, props.classes);

const tablebody = ref(null);

const state = reactive({
    selection: [],
    selectAllOption: null,
    selectedAll: false
});

const headerColumns = computed(() => {
    return props.headers.filter((h) => !h?.hide);
});

const messageText = computed(() => {
    if (props.loading) return props.loadingText;
    return props.noDataText;
});

const getValue = (obj, path, defaultValue = undefined) => {
    return getObjectValue(obj, path, defaultValue);
};

const toggleAll = () => {
    if (!state.selectedAll) deselectAll();
    else selectAll();
};

const selectAll = () => {
    state.selection = [...Array(props.rows.length).keys()];
};

const selectRows = (i) => {
    state.selection = [...Array(+i).keys()];
};

const deselectAll = () => {
    state.selection = [];
};

const toggleRow = (i, origin, $event) => {
    if(!props.selectRow || origin === 'selectRow') {
        let newSelection = [...state.selection];
        state.selectAllOption = null;
        if (!newSelection.includes(i)) {
            if (props.selectOne === true) newSelection = [i];
            else newSelection.push(i)
        } else {
            const index = newSelection.indexOf(i);
            if (index !== -1) newSelection.splice(index, 1);
        }
        state.selection = newSelection;
    }
};

const selectRow = (i, item, $event) => {
    // let $event.target.cellIndex
    if (props.selectRow) toggleRow(i, 'selectRow');
    
    // we do not want to send this event
    // if we are also checking the box
    if (props.select) {
        // prevent input clicks
        // prevent first cell checkbox clicks
        if ($event.target.nodeName === 'INPUT') return;
        if ($event.target.nodeName === 'TD' && $event.target.cellIndex === 0) return;
        emit('click-row', item);
    } 
    else {
        emit('click-row', item);
    }
};

const sortClicked = (h, hindex) => {
    if (h.sorting === true) {
        let direction = null;
        if (h.sorted === 'ASC') direction = 'DESC';
        else if (h.sorted === 'DESC') direction = 'ASC';
        else if (!h.sorted) {
            if (h.sortDefault) direction = h.sortDefault;
            else direction = 'ASC';
        }
        else direction = null;

        // creates headers to be replaced
        let newHeaders = [];
        props.headers.forEach((c) => {
            if (c.value === h.value) {
                newHeaders.push({
                    ...c,
                    sorted: direction
                });
            } else {
                newHeaders.push({
                    ...c,
                    sorted: null
                });
            }
        });

        emit('sort', h, direction, [...newHeaders]);
    }
};

watch(() => state.selection, (v) => {
    let selectedItems = [];
    if (state.selection.length) {
        v.forEach(i => {
            const r = props.rows[i]
            if (r) {
                if (props.selectionField && r[props.selectionField]) {
                    selectedItems.push(r[props.selectionField]);
                }
                else {
                    selectedItems.push(props.rows[i]);
                }
            }
        });
        // if the selected items equal the total items
        // lets make sure to check the selected all
        // however, if they do not match, then uncheck select all
        if (state.selection.length === props.rows.length) state.selectedAll = true;
        else state.selectedAll = false;
    } 
    else {
        // if the selection is empty, 
        // lets uncheck the select all
        state.selectedAll = false;
    }

    emit('selection', selectedItems, [...v]);
});

</script>