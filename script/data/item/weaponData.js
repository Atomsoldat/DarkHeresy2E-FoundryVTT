import EquipmentItemData from "./equipmentItemData.js";

const fields = foundry.data.fields;

export default class WeaponData extends EquipmentItemData {

    static defineSchema() {

        const equipmentItemData = super.defineSchema();
        return {
            // Using destructuring to effectively append our additional data here
            ...equipmentItemData,
            class: new fields.StringField({ initial: "" }),
            type: new fields.StringField({ initial: "" }),
            range: new fields.NumberField({ initial: 0 }),
            rateOfFire: new fields.SchemaField({
                single: new fields.NumberField({ initial: 0 }),
                burst: new fields.NumberField({ initial: 0 }),
                full: new fields.NumberField({ initial: 0 })
            }),
            damage: new fields.StringField({ initial: "" }),
            damageType: new fields.StringField({ initial: "impact" }),
            penetration: new fields.StringField({ initial: "0" }),
            clip: new fields.SchemaField({
                max: new fields.NumberField({ initial: 0 }),
                value: new fields.NumberField({ initial: 0 })
            }),
            reload: new fields.StringField({ initial: "Full" }),
            special: new fields.StringField({ initial: "" }),
            attack: new fields.NumberField({ initial: 0 }),
            ammo: new fields.StringField({ initial: "" })
        };

    }

    prepareDerivedData() {
        super.prepareDerivedData();

        if (this.ammo !== "") {
            // load ammo
        }

    }

}
