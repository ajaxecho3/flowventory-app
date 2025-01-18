/*
 * ==========================================
 * |          GENERATED BY SUPAZOD          |
 * ==========================================
 */

import { z } from "zod";
import { Json } from "./database.types";

export const jsonSchema: z.ZodSchema<Json> = z.lazy(() =>
  z
    .union([
      z.string(),
      z.number(),
      z.boolean(),
      z.record(z.union([jsonSchema, z.undefined()])),
      z.array(jsonSchema),
    ])
    .nullable(),
);

export const publicAuditLogsRowSchemaSchema = z.object({
  changed_at: z.string().nullable(),
  changed_by: z.string(),
  changed_data: jsonSchema.nullable(),
  id: z.string(),
  operation: z.string(),
  record_id: z.string(),
  table_name: z.string(),
});

export const publicAuditLogsInsertSchemaSchema = z.object({
  changed_at: z.string().optional().nullable(),
  changed_by: z.string(),
  changed_data: jsonSchema.optional().nullable(),
  id: z.string().optional(),
  operation: z.string(),
  record_id: z.string(),
  table_name: z.string(),
});

export const publicAuditLogsUpdateSchemaSchema = z.object({
  changed_at: z.string().optional().nullable(),
  changed_by: z.string().optional(),
  changed_data: jsonSchema.optional().nullable(),
  id: z.string().optional(),
  operation: z.string().optional(),
  record_id: z.string().optional(),
  table_name: z.string().optional(),
});

export const publicAuditLogsRelationshipsSchemaSchema = z.tuple([]);

export const publicCategoriesRowSchemaSchema = z.object({
  created_at: z.string().nullable(),
  description: z.string().nullable(),
  id: z.string(),
  name: z.string(),
});

export const publicCategoriesInsertSchemaSchema = z.object({
  created_at: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  id: z.string().optional(),
  name: z.string(),
});

export const publicCategoriesUpdateSchemaSchema = z.object({
  created_at: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  id: z.string().optional(),
  name: z.string().optional(),
});

export const publicCategoriesRelationshipsSchemaSchema = z.tuple([]);

export const publicInventoryAdjustmentsRowSchemaSchema = z.object({
  adjusted_by: z.string(),
  adjustment_quantity: z.number(),
  created_at: z.string().nullable(),
  id: z.string(),
  product_id: z.string(),
  reason: z.string(),
});

export const publicInventoryAdjustmentsInsertSchemaSchema = z.object({
  adjusted_by: z.string(),
  adjustment_quantity: z.number(),
  created_at: z.string().optional().nullable(),
  id: z.string().optional(),
  product_id: z.string(),
  reason: z.string(),
});

export const publicInventoryAdjustmentsUpdateSchemaSchema = z.object({
  adjusted_by: z.string().optional(),
  adjustment_quantity: z.number().optional(),
  created_at: z.string().optional().nullable(),
  id: z.string().optional(),
  product_id: z.string().optional(),
  reason: z.string().optional(),
});

export const publicInventoryAdjustmentsRelationshipsSchemaSchema = z.tuple([]);

export const publicProductsRowSchemaSchema = z.object({
  category_id: z.string().nullable(),
  created_at: z.string().nullable(),
  created_by: z.string(),
  description: z.string().nullable(),
  id: z.string(),
  image: z.string().nullable(),
  image_filename: z.string().nullable(),
  name: z.string(),
  price: z.number(),
  quantity: z.number(),
  reorder_level: z.number(),
  supplier_id: z.string().nullable(),
  updated_at: z.string().nullable(),
});

export const publicProductsInsertSchemaSchema = z.object({
  category_id: z.string().optional().nullable(),
  created_at: z.string().optional().nullable(),
  created_by: z.string(),
  description: z.string().optional().nullable(),
  id: z.string().optional(),
  image: z.string().optional().nullable(),
  image_filename: z.string().optional().nullable(),
  name: z.string(),
  price: z.number(),
  quantity: z.number().optional(),
  reorder_level: z.number().optional(),
  supplier_id: z.string().optional().nullable(),
  updated_at: z.string().optional().nullable(),
});

export const publicProductsUpdateSchemaSchema = z.object({
  category_id: z.string().optional().nullable(),
  created_at: z.string().optional().nullable(),
  created_by: z.string().optional(),
  description: z.string().optional().nullable(),
  id: z.string().optional(),
  image: z.string().optional().nullable(),
  image_filename: z.string().optional().nullable(),
  name: z.string().optional(),
  price: z.number().optional(),
  quantity: z.number().optional(),
  reorder_level: z.number().optional(),
  supplier_id: z.string().optional().nullable(),
  updated_at: z.string().optional().nullable(),
});

export const publicProductsRelationshipsSchemaSchema = z.tuple([
  z.object({
    foreignKeyName: z.literal("products_category_id_fkey"),
    columns: z.tuple([z.literal("category_id")]),
    isOneToOne: z.literal(false),
    referencedRelation: z.literal("categories"),
    referencedColumns: z.tuple([z.literal("id")]),
  }),
  z.object({
    foreignKeyName: z.literal("products_supplier_id_fkey"),
    columns: z.tuple([z.literal("supplier_id")]),
    isOneToOne: z.literal(false),
    referencedRelation: z.literal("suppliers"),
    referencedColumns: z.tuple([z.literal("id")]),
  }),
]);

export const publicSuppliersRowSchemaSchema = z.object({
  address: z.string().nullable(),
  contact_details: jsonSchema.nullable(),
  created_at: z.string().nullable(),
  id: z.string(),
  name: z.string(),
});

export const publicSuppliersInsertSchemaSchema = z.object({
  address: z.string().optional().nullable(),
  contact_details: jsonSchema.optional().nullable(),
  created_at: z.string().optional().nullable(),
  id: z.string().optional(),
  name: z.string(),
});

export const publicSuppliersUpdateSchemaSchema = z.object({
  address: z.string().optional().nullable(),
  contact_details: jsonSchema.optional().nullable(),
  created_at: z.string().optional().nullable(),
  id: z.string().optional(),
  name: z.string().optional(),
});

export const publicSuppliersRelationshipsSchemaSchema = z.tuple([]);

export const publicTransactionsRowSchemaSchema = z.object({
  action: z.string(),
  created_at: z.string().nullable(),
  id: z.string(),
  notes: z.string().nullable(),
  product_id: z.string(),
  quantity: z.number(),
  transact_by: z.string(),
});

export const publicTransactionsInsertSchemaSchema = z.object({
  action: z.string(),
  created_at: z.string().optional().nullable(),
  id: z.string().optional(),
  notes: z.string().optional().nullable(),
  product_id: z.string(),
  quantity: z.number(),
  transact_by: z.string(),
});

export const publicTransactionsUpdateSchemaSchema = z.object({
  action: z.string().optional(),
  created_at: z.string().optional().nullable(),
  id: z.string().optional(),
  notes: z.string().optional().nullable(),
  product_id: z.string().optional(),
  quantity: z.number().optional(),
  transact_by: z.string().optional(),
});

export const publicTransactionsRelationshipsSchemaSchema = z.tuple([]);
