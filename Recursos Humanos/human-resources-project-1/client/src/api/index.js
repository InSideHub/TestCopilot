import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

// Employee API endpoints
export const getEmployees = () => {
  return axios.get(`${API_URL}/employees`);
};

export const addEmployee = (employeeData) => {
  return axios.post(`${API_URL}/employees`, employeeData);
};

export const updateEmployee = (employeeId, employeeData) => {
  return axios.put(`${API_URL}/employees/${employeeId}`, employeeData);
};

export const deleteEmployee = (employeeId) => {
  return axios.delete(`${API_URL}/employees/${employeeId}`);
};

// Report API endpoints
export const getReportsByEmployee = (employeeId) => {
  return axios.get(`${API_URL}/employees/${employeeId}/reports`);
};

export const addReport = (employeeId, reportData) => {
  return axios.post(`${API_URL}/employees/${employeeId}/reports`, reportData);
};

export const updateReport = (reportId, reportData) => {
  return axios.put(`${API_URL}/reports/${reportId}`, reportData);
};

export const deleteReport = (reportId) => {
  return axios.delete(`${API_URL}/reports/${reportId}`);
};

// Position API endpoints
export const getPositionsByEmployee = (employeeId) => {
  return axios.get(`${API_URL}/employees/${employeeId}/positions`);
};

export const addPosition = (employeeId, positionData) => {
  return axios.post(`${API_URL}/employees/${employeeId}/positions`, positionData);
};

export const updatePosition = (positionId, positionData) => {
  return axios.put(`${API_URL}/positions/${positionId}`, positionData);
};

export const deletePosition = (positionId) => {
  return axios.delete(`${API_URL}/positions/${positionId}`);
};

// Branch API endpoints
export const getBranchesByEmployee = (employeeId) => {
  return axios.get(`${API_URL}/employees/${employeeId}/branches`);
};

export const addBranch = (employeeId, branchData) => {
  return axios.post(`${API_URL}/employees/${employeeId}/branches`, branchData);
};

export const updateBranch = (branchId, branchData) => {
  return axios.put(`${API_URL}/branches/${branchId}`, branchData);
};

export const deleteBranch = (branchId) => {
  return axios.delete(`${API_URL}/branches/${branchId}`);
};

// Region API endpoints
export const getRegionsByEmployee = (employeeId) => {
  return axios.get(`${API_URL}/employees/${employeeId}/regions`);
};

export const addRegion = (employeeId, regionData) => {
  return axios.post(`${API_URL}/employees/${employeeId}/regions`, regionData);
};

export const updateRegion = (regionId, regionData) => {
  return axios.put(`${API_URL}/regions/${regionId}`, regionData);
};

export const deleteRegion = (regionId) => {
  return axios.delete(`${API_URL}/regions/${regionId}`);
};

// Province API endpoints
export const getProvincesByEmployee = (employeeId) => {
  return axios.get(`${API_URL}/employees/${employeeId}/provinces`);
};

export const addProvince = (employeeId, provinceData) => {
  return axios.post(`${API_URL}/employees/${employeeId}/provinces`, provinceData);
};

export const updateProvince = (provinceId, provinceData) => {
  return axios.put(`${API_URL}/provinces/${provinceId}`, provinceData);
};

export const deleteProvince = (provinceId) => {
  return axios.delete(`${API_URL}/provinces/${provinceId}`);
};

// Location API endpoints
export const getLocationsByEmployee = (employeeId) => {
  return axios.get(`${API_URL}/employees/${employeeId}/locations`);
};

export const addLocation = (employeeId, locationData) => {
  return axios.post(`${API_URL}/employees/${employeeId}/locations`, locationData);
};

export const updateLocation = (locationId, locationData) => {
  return axios.put(`${API_URL}/locations/${locationId}`, locationData);
};

export const deleteLocation = (locationId) => {
  return axios.delete(`${API_URL}/locations/${locationId}`);
};

// Internal Movement API endpoints
export const getInternalMovementsByEmployee = (employeeId) => {
  return axios.get(`${API_URL}/employees/${employeeId}/internal-movements`);
};

export const addInternalMovement = (employeeId, movementData) => {
  return axios.post(`${API_URL}/employees/${employeeId}/internal-movements`, movementData);
};

export const updateInternalMovement = (movementId, movementData) => {
  return axios.put(`${API_URL}/internal-movements/${movementId}`, movementData);
};

export const deleteInternalMovement = (movementId) => {
  return axios.delete(`${API_URL}/internal-movements/${movementId}`);
};