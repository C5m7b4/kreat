# la-fouille

A small utility library for searching, filtering and sorting Arrays of objects

All of the components can be styled either by a className or a style object

To Install:

```js
npm install la-fouille
```

Importing:

```js
import {
  SearchSortAndFilter,
  SearchSortAndFilterProps,
  IPerson,
} from 'la-fouille';
```

You will also then want to import your object and a rendering component that you will need to provide to render out the final results:

```js
import { people } from '../mockData/people';
import { PeopleRenderer } from '../components/renderers/PeopleRenderer';
```

Usage:

```js
<SearchSortAndFilter
  title={'People'}
  dataSource={people}
  searchProperties={['firstName', 'lastName']}
  initialSortProperty={ property: 'lastName', isDescending: true }
  initialFilterProperties={[]}
  mainDivStyle={
      width: '80%',
      margin: 'auto',
      border: '1px solid black',
      borderRadius: '10px',
      padding: '20px 25px',
    }
  searchInputMainDivClassName={'search-input-main-div'}
  searchInputLabelStyle={
    marginLeft: '10px',
    fontWeight: 'bold',
  }
  searchInputLabelClassName={'search-input-label'}
  searchInputInputStyle={
    borderRadius: '5px',
    padding: '3px 7px',
  }
  searchInputInputClassName={'search-input-input'}
  sortersMainDivStyle={
    marginTop: '15px',
    marginLeft: '10px',
  }
  sortersMainDivClassName={'sorters-main-div'}
  sortersLabelClassName={'sorters-label'}
  sortersLabelStyle={
    fontWeight: 'bold',
  }
  sortersLabelText={'Sort Me!!'}
  sortersSelectClassName={'sorters-select'}
  sortersSelectStyle={
    borderRadius: '5px',
    padding: '3px 7px',
  }
  sortersSelectOptionClassName={'sorters-select-option'}
  filterMainDivClassName={'filter-main-div'}
  filterMainDivStyle={
    marginTop: '10px',
    border: '1px solid black',
    borderRadius: '10px',
    padding: '10px 10px',
  }
  filtersLabelClassName={'filters-label'}
  filtersLabelStyle= {
    fontWeight: 'bold',
    fontSize: '1.2rem',
  }
  filtersCheckboxStyle={
    marginRight: '5px',
  }
  filtersCheckboxClassName={'filters-checkbox'}
  filtersCheckboxLabelStyle={
    fontStyle: 'itailc',

  filtersCheckboxLabelClassName-{'filters-checkbox-label}
>
  {(person) => (
    <PeopleRenderer
      {...person}
      key={`${person.firstName}-${person.lastName}`}
    />
  )}
</SearchSortAndFilter>
```

## Available Props

|           Prop name           |  optional  |      type       |                                            description                                            |
| :---------------------------: | :--------: | :-------------: | :-----------------------------------------------------------------------------------------------: |
|          showSearch           | [required] |     boolean     |                                            show Search                                            |
|           showSort            | [required] |     boolean     |                                           show Sorters                                            |
|          showFilters          | [required] |     boolean     |                                           show Filters                                            |
|          dataSource           | [required] |      Array      |              Normally an Array of objects used for searching, sorting, and filtering              |
|       mainDivClassName        |    [✔]     |     string      |                    Optional classname to be applied to the main component div                     |
|       mainDivClassName        |    [✔]     |     object      |               optional object that can be used to css style the main component div                |
|       titleDivClassName       |    [✔]     |     string      |                                    classname for the title div                                    |
|       titleDivClassName       |    [✔]     |     object      |                                css style object for the title div                                 |
|             title             | [required] |     string      |                                 the title for the main component                                  |
|       searchProperties        | [required] |      Array      |                       Properties of the main object that can be searchable                        |
|      initialSortProperty      | [required] | ISorterProperty |                                  The initial property to sort on                                  |
|       filterProperties        | [required] |      Array      |                       Properties of the main object that can be filtered on                       |
|    initialFilterProperties    | [required] |      Array      |                                The initial properties to filter on                                |
|    searchInputMainDivStyle    |    [✔]     |     object      |                         The main css style for the SearchInput component                          |
|  searchInputMainDivClassName  |    [✔]     |     string      |                         The main classname for the Search Input component                         |
|     searchInputLabelStyle     |    [✔]     |     object      |                       css style for the label in the Search Input component                       |
|   searchInputLabelClassName   |    [✔]     |     string      |                       className for the label in the Search Input component                       |
|     searchInputLabelText      |    [✔]     |     string      |                         text for the label in the Search Input component                          |
|   searchInputLabelClassName   |    [✔]     |     string      |                       className for the label in the Search Input component                       |
|     searchInputInputStyle     |    [✔]     |     object      |                   css style for the input element in the Searh Input component                    |
|   searchInputInputClassName   |    [✔]     |     string      |                   classname for the input element in the Search Input component                   |
|    searchInputPlaceholder     |    [✔]     |     string      |                  placeholder for the input element in the Search Input component                  |
|      sortersMainDivStyle      |    [✔]     |     object      |                        css style object for the sorters main div component                        |
|    sortersMainDivClassName    |    [✔]     |     string      |                        classname for the main div in the sorters component                        |
|     sortersLabelClassName     |    [✔]     |     string      |                         classname for the label in the sorters component                          |
|       sortersLabelStyle       |    [✔]     |     object      |                         css style for the label in the sorters component                          |
|       sortersLabelText        |    [✔]     |     string      |                            text for the label in the sorters component                            |
|    sortersSelectClassName     |    [✔]     |     string      |                     classname for the select element in the sorters component                     |
|      sortersSelectStyle       |    [✔]     |     object      |                     css style for the select element in the sorters component                     |
| sortersSelectOptionClassName  |    [✔]     |     string      |                     classname for the select element in the sorters component                     |
|   sortersSelectOptionStyle    |    [✔]     |     object      |         css style for the option elements of the select element in the sorters component          |
|      filterMainDivStyle       |    [✔]     |     object      |                                css style for the filters component                                |
|    filterMainDivClassName     |    [✔]     |     string      |                        classname for the main div in the filters component                        |
|     filtersLabelClassName     |    [✔]     |     string      |                        classname for main label for the filters component                         |
|       filtersLabelStyle       |    [✔]     |     object      |                      css style for the main label for the filters component                       |
|     filtersCheckboxStyle      |    [✔]     |     object      |                       css style for the checkboxes in the filters component                       |
|   filtersCheckboxClassName    |    [✔]     |     string      |                       classname for the checkboxes in the filters component                       |
|   filtersCheckboxLabelStyle   |    [✔]     |     object      |                    css style for the checkbox labels in the filters component                     |
| filtersCheckboxLabelClassName |    [✔]     |     string      |                     cassname for the checkbox labels in the filters component                     |
|      toggleDivClassName       |    [✔]     |     string      |       clssName for the toggle divs for users toggling showSearch, showSort, and showFilter        |
|        toggleDivStyle         |    [✔]     |     object      |       css style for the toggle divs for users toggling showSearch, showSort, and showFilter       |
|         showToggleDiv         |    [✔]     |     boolean     | boolean to decide if you want the users to be able to toggle showSearch, showSort, and showFilter |
|    toggleMainDivClassName     |    [✔]     |     string      |                              classname for the toggle div container                               |
|      toggleMainDivStyle       |    [✔]     |     object      |                           css style object for the toggle div container                           |
|     toggleInputClassName      |    [✔]     |     string      |                          classname for the input of the toggle component                          |
|       toggleInputStyle        |    [✔]     |     object      |                      css style object for the input of the toggle component                       |
|     toggleLabelClassName      |    [✔]     |     string      |                          classname of the label for the toggle component                          |
|       toggleLabelStyle        |    [✔]     |     object      |                      css style object for the label for the toggle component                      |
|   toggleLabelSpan1ClassName   |    [✔]     |     string      |               classname for the first span of the checkbox for the toggle component               |
|   toggleLabelSpan2ClassName   |    [✔]     |     string      |              classname for the second span of the checkbox for the toggle component               |
