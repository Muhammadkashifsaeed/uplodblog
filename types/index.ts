export type {
  ApiError,
  ApiResponse,
  HealthCheckPayload,
  PaginatedResponse,
} from "./api";

export type {
  BlogArticleSection,
  BlogCategorySlug,
  BlogPost,
  HeroCategoryItem,
} from "./blog";

export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}
