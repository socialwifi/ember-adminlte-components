export function shouldShow(relatedID, relatedFieldName, element) {
  return relatedID === element.get(relatedFieldName) && !element.get('isNew') && !element.get('isDeleted');
}
export function shouldShowForCurrentOrDescendants(relatedID, relatedFieldName, element, descendants) {
  let relatedValue = element.get(relatedFieldName);
  return (relatedID === relatedValue || descendants.contains(relatedValue)) && !element.get('isNew') && !element.get('isDeleted');
}
export function shouldShowForCurrentOrAncestors(relatedID, relatedFieldName, element, ancestors) {
  let relatedValue = element.get(relatedFieldName);
  return (relatedID === relatedValue || ancestors.contains(relatedValue)) && !element.get('isNew') && !element.get('isDeleted');
}
