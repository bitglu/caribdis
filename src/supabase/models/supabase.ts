export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      companies: {
        Row: {
          administrator: string | null
          created_at: string
          email: string | null
          id: number
          name: string | null
          phone: string | null
          status: string | null
        }
        Insert: {
          administrator?: string | null
          created_at?: string
          email?: string | null
          id?: number
          name?: string | null
          phone?: string | null
          status?: string | null
        }
        Update: {
          administrator?: string | null
          created_at?: string
          email?: string | null
          id?: number
          name?: string | null
          phone?: string | null
          status?: string | null
        }
        Relationships: []
      }
      drivers: {
        Row: {
          created_at: string
          document: Json | null
          email: string | null
          id: number
          information: Json | null
          name: string | null
          phone: string | null
          status: string | null
        }
        Insert: {
          created_at?: string
          document?: Json | null
          email?: string | null
          id?: number
          information?: Json | null
          name?: string | null
          phone?: string | null
          status?: string | null
        }
        Update: {
          created_at?: string
          document?: Json | null
          email?: string | null
          id?: number
          information?: Json | null
          name?: string | null
          phone?: string | null
          status?: string | null
        }
        Relationships: []
      }
      purchases: {
        Row: {
          amount: number
          companies_id: number | null
          created_at: string
          drivers_id: number | null
          id: number
          status: string | null
          travels_id: number
          type: string
          user_id: string | null
          webpayCommit: Json | null
          webpayTransaction: Json | null
        }
        Insert: {
          amount: number
          companies_id?: number | null
          created_at?: string
          drivers_id?: number | null
          id?: number
          status?: string | null
          travels_id: number
          type: string
          user_id?: string | null
          webpayCommit?: Json | null
          webpayTransaction?: Json | null
        }
        Update: {
          amount?: number
          companies_id?: number | null
          created_at?: string
          drivers_id?: number | null
          id?: number
          status?: string | null
          travels_id?: number
          type?: string
          user_id?: string | null
          webpayCommit?: Json | null
          webpayTransaction?: Json | null
        }
        Relationships: [
          {
            foreignKeyName: "purchases_companies_id_fkey"
            columns: ["companies_id"]
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "purchases_drivers_id_fkey"
            columns: ["drivers_id"]
            referencedRelation: "drivers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "purchases_travels_id_fkey"
            columns: ["travels_id"]
            referencedRelation: "travels"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "purchases_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      travels: {
        Row: {
          comments: string | null
          companies_id: number
          created_at: string
          date: string
          drivers_id: number | null
          from: Json
          id: number
          passenger: Json
          status: string
          to: Json
          users_id: string | null
          vehicles_id: number | null
        }
        Insert: {
          comments?: string | null
          companies_id: number
          created_at?: string
          date: string
          drivers_id?: number | null
          from: Json
          id?: number
          passenger: Json
          status?: string
          to: Json
          users_id?: string | null
          vehicles_id?: number | null
        }
        Update: {
          comments?: string | null
          companies_id?: number
          created_at?: string
          date?: string
          drivers_id?: number | null
          from?: Json
          id?: number
          passenger?: Json
          status?: string
          to?: Json
          users_id?: string | null
          vehicles_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "travels_companies_id_fkey"
            columns: ["companies_id"]
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "travels_drivers_id_fkey"
            columns: ["drivers_id"]
            referencedRelation: "drivers"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "travels_users_id_fkey"
            columns: ["users_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "travels_vehicles_id_fkey"
            columns: ["vehicles_id"]
            referencedRelation: "vehicles"
            referencedColumns: ["id"]
          }
        ]
      }
      vehicles: {
        Row: {
          brand: string | null
          created_at: string
          documents: Json | null
          driver_id: number | null
          id: number
          information: Json | null
          model: string | null
          name: string | null
          status: string | null
          year: string | null
        }
        Insert: {
          brand?: string | null
          created_at?: string
          documents?: Json | null
          driver_id?: number | null
          id?: number
          information?: Json | null
          model?: string | null
          name?: string | null
          status?: string | null
          year?: string | null
        }
        Update: {
          brand?: string | null
          created_at?: string
          documents?: Json | null
          driver_id?: number | null
          id?: number
          information?: Json | null
          model?: string | null
          name?: string | null
          status?: string | null
          year?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "vehicles_driver_id_fkey"
            columns: ["driver_id"]
            referencedRelation: "drivers"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
