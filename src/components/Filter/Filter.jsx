import { Formik, Field } from 'formik';
import { Button, Icons } from '../';
import * as Yup from 'yup';
import s from './Filter.module.css';

const handleSubmit = (value, action) => {
  console.log(value);
  action.resetForm();
};

const Filter = () => {
  return (
    <section>
      <Formik
        initialValues={{
          location: '',
        }}
        onSubmit={handleSubmit}
        validationSchema={Yup.object().shape({
          location: Yup.string().min(
            3,
            'Location is too short - should be 3 chars minimum'
          ),
        })}
      >
        {(formik) => {
          const {
            values,
            handleChange,
            handleSubmit,
            handleBlur,
            isValid,
            dirty,
          } = formik;
          return (
            <form className={s.filterContainer} onSubmit={handleSubmit}>
              <label htmlFor="location" className={s.form_locationLabel}>
                Location
              </label>
              <div className={s.form_locationInputContainer}>
                <Icons id={'icon-map-pin'} fill="none" />
                <Field
                  className={s.form_locationInput}
                  id="location"
                  type="text"
                  name="location"
                  placeholder="Kharkov, Ukraine"
                  value={values.location}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  title="Location should be 3 chars minimum, example `kha`"
                />
              </div>

              <p className={s.form_filtersText}>Filters</p>

              <h3 className={s.form_filtersTitle}>Vehicle equipment</h3>
              <div className={s.form_equipmentContainer}>
                <label htmlFor="equipment_ac" className={s.form_equipmentLabel}>
                  <Icons id={'icon-airConditioner'} size="32" />
                  <p>AC</p>

                  <Field
                    className={s.form_equipmentCheckbox}
                    id="equipment_ac"
                    type="checkbox"
                    name="equipment"
                    value="ac"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    title="Location should be 3 chars minimum, example `kha`"
                  />
                  <span className={s.form_equipmentCheckmark}></span>
                </label>

                <label htmlFor="equipment_tm" className={s.form_equipmentLabel}>
                  <Icons id={'icon-transmission'} fill="none" size="32" />
                  <p>Automatic</p>
                  <Field
                    className={s.form_equipmentCheckbox}
                    id="equipment_tm"
                    type="checkbox"
                    name="equipment"
                    value="transmition"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    title="Location should be 3 chars minimum, example `kha`"
                  />
                  <span className={s.form_equipmentCheckmark}></span>
                </label>

                <label
                  htmlFor="equipment_kitchen"
                  className={s.form_equipmentLabel}
                >
                  <Icons id={'icon-kitchen'} fill="none" size="32" />
                  <p>Kitchen</p>
                  <Field
                    className={s.form_equipmentCheckbox}
                    id="equipment_kitchen"
                    type="checkbox"
                    name="equipment"
                    value="kitchen"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    title="Location should be 3 chars minimum, example `kha`"
                  />
                  <span className={s.form_equipmentCheckmark}></span>
                </label>

                <label htmlFor="equipment_tv" className={s.form_equipmentLabel}>
                  <Icons id={'icon-tv'} fill="none" size="32" />
                  <p>TV</p>
                  <Field
                    className={s.form_equipmentCheckbox}
                    id="equipment_tv"
                    type="checkbox"
                    name="equipment"
                    value="tv"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    title="Location should be 3 chars minimum, example `kha`"
                  />
                  <span className={s.form_equipmentCheckmark}></span>
                </label>

                <label
                  htmlFor="equipment_shower"
                  className={s.form_equipmentLabel}
                >
                  <Icons id={'icon-shower'} fill="none" size="32" />
                  <p>Shower/WC</p>
                  <Field
                    className={s.form_equipmentCheckbox}
                    id="equipment_shower"
                    type="checkbox"
                    name="equipment"
                    value="shower"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    title="Location should be 3 chars minimum, example `kha`"
                  />
                  <span className={s.form_equipmentCheckmark}></span>
                </label>
              </div>

              <h3 className={s.form_filtersTitle}>Vehicle type</h3>
              <div className={s.form_typeContainer}>
                <label htmlFor="type_van" className={s.form_typeLabel}>
                  <Icons id={'icon-van'} size="40" height="28" />
                  <p>Van</p>
                  <Field
                    className={s.form_typeRadioButton}
                    id="type_van"
                    type="radio"
                    name="type"
                    value="van"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    title="Location should be 3 chars minimum, example `kha`"
                  />
                  <span className={s.form_equipmentCheckmark}></span>
                </label>

                <label htmlFor="type_fully" className={s.form_typeLabel}>
                  <Icons id={'icon-fully'} size="40" height="28" />
                  <p>Fully Integrated</p>
                  <Field
                    className={s.form_typeRadioButton}
                    id="type_fully"
                    type="radio"
                    name="type"
                    value="fully"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    title="Location should be 3 chars minimum, example `kha`"
                  />
                  <span className={s.form_equipmentCheckmark}></span>
                </label>

                <label htmlFor="type_alcove" className={s.form_typeLabel}>
                  <Icons id={'icon-alcove'} size="40" height="28" />
                  <p>Alcove</p>
                  <Field
                    className={s.form_typeRadioButton}
                    id="type_alcove"
                    type="radio"
                    name="type"
                    value="alcove"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    title="Location should be 3 chars minimum, example `kha`"
                  />
                  <span className={s.form_equipmentCheckmark}></span>
                </label>
              </div>

              <Button
                className={'search'}
                type="submit"
                // isDisabled={!(dirty && isValid)}
              >
                Search
              </Button>
            </form>
          );
        }}
      </Formik>
    </section>
  );
};

export default Filter;
